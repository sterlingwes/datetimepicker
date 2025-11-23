import React from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Repro2() {
  const [showForm, setShowForm] = useState(false);

  const onPressOpenForm = () => setShowForm(true);

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressOpenForm}>
        <Text className="text-base font-semibold text-blue-600">
          Open Picker Form
        </Text>
      </Pressable>
      <Modal visible={showForm}>
        <DateModal onSubmitDone={() => setShowForm(false)} />
      </Modal>
    </View>
  );
}

const Container = (props) => <View style={styles.container} {...props} />;

function DateModal({onSubmitDone}) {
  const [startPickerOpen, setStartPickerOpen] = useState(false);
  const [endPickerOpen, setEndPickerOpen] = useState(false);

  const {control, handleSubmit, watch, getValues, setValue} = useForm({
    defaultValues: {
      startDate: new Date(),
      endDate: new Date(),
    },
  });

  const today = useMemo(() => new Date(), []);
  const startDate = watch('startDate');
  const pickerDisplay = useMemo(() => {
    if (Platform.OS !== 'ios') {
      return 'calendar';
    }
    const version =
      typeof Platform.Version === 'string'
        ? parseFloat(Platform.Version)
        : Platform.Version;
    return version && version >= 14 ? 'inline' : 'spinner';
  }, []);

  const onSubmit = handleSubmit(() => {
    onSubmitDone();
  });

  return (
    <Container>
      <View className="flex-1 gap-6">
        <View className="gap-2">
          <Text className="text-2xl font-semibold text-gray-900">
            Select dates
          </Text>
          <Text className="text-base text-gray-700">
            Pick a start and end date. Submitting will close this modal.
          </Text>
        </View>

        <View className="gap-4">
          <View className="gap-2">
            <Text className="text-base font-semibold text-gray-900">
              Start date
            </Text>
            <Controller
              control={control}
              name="startDate"
              render={({field: {value, onChange}}) => (
                <>
                  <Pressable
                    className="rounded-xl border border-gray-300 bg-white px-4 py-3"
                    onPress={() => setStartPickerOpen(true)}>
                    <Text className="text-base text-gray-900">
                      {value.toDateString()}
                    </Text>
                  </Pressable>
                  <DatePickerModal
                    visible={startPickerOpen}
                    value={value}
                    display={pickerDisplay}
                    minimumDate={today}
                    onChange={(selectedDate) => {
                      onChange(selectedDate);
                      const currentEnd = getValues('endDate');
                      if (currentEnd && selectedDate > currentEnd) {
                        setValue('endDate', selectedDate, {
                          shouldValidate: true,
                        });
                      }
                    }}
                    onClose={() => setStartPickerOpen(false)}
                  />
                </>
              )}
            />
          </View>

          <View className="gap-2">
            <Text className="text-base font-semibold text-gray-900">
              End date
            </Text>
            <Controller
              control={control}
              name="endDate"
              render={({field: {value, onChange}}) => (
                <>
                  <Pressable
                    className="rounded-xl border border-gray-300 bg-white px-4 py-3"
                    onPress={() => setEndPickerOpen(true)}>
                    <Text className="text-base text-gray-900">
                      {value.toDateString()}
                    </Text>
                  </Pressable>
                  <DatePickerModal
                    visible={endPickerOpen}
                    value={value}
                    display={pickerDisplay}
                    minimumDate={startDate}
                    onChange={(selectedDate) => {
                      onChange(selectedDate);
                    }}
                    onClose={() => setEndPickerOpen(false)}
                  />
                </>
              )}
            />
          </View>
        </View>

        <Pressable
          onPress={onSubmit}
          className="mt-auto rounded-xl bg-blue-600 px-4 py-3">
          <Text className="text-center text-base font-semibold text-white">
            Submit
          </Text>
        </Pressable>
      </View>
    </Container>
  );
}

function DatePickerModal({
  visible,
  value,
  minimumDate,
  display,
  onChange,
  onClose,
  sheetStyle,
}) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.sheet, sheetStyle]}>
          <DateTimePicker
            value={value}
            mode="date"
            display={display}
            minimumDate={minimumDate}
            onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
              if (event.type === 'dismissed' || !selectedDate) {
                onClose();
                return;
              }
              onChange(selectedDate);
              onClose();
            }}
          />
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text className="text-base font-semibold text-blue-600">Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const SHEET_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheet: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    gap: 12,
    width: SHEET_WIDTH * 0.9,
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
