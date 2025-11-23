# CHANGELOG

### Changelog is no longer maintained

Please see the [releases page](https://github.com/react-native-community/datetimepicker/releases)

## [9.0.0](https://github.com/sterlingwes/datetimepicker/compare/v8.5.0...v9.0.0) (2025-11-23)


### ⚠ BREAKING CHANGES

* jest/setup.js was removed as it's not needed
* actually, should not be breaking but it's a big update
* **android:** new arch support ([#730](https://github.com/sterlingwes/datetimepicker/issues/730))
* actually, should not be breaking but there were changes in typings
* locale prop removed
* only Android API level >=21 (Android 5) and iOS >= 11 are supported
* you need XCode 11 to build this version, and you need this version to properly support iOS 14 (for that you need XCode 12)

### Features

* add accentColor prop for iOS ([#584](https://github.com/sterlingwes/datetimepicker/issues/584)) ([dcda13c](https://github.com/sterlingwes/datetimepicker/commit/dcda13cade1af66093d4bed675053b178f83d8c3))
* add back locale prop ([#544](https://github.com/sterlingwes/datetimepicker/issues/544)) ([05f39fa](https://github.com/sterlingwes/datetimepicker/commit/05f39fa82efbbd114550c3ad8044096382075277))
* add disabled prop support for iOS ([#412](https://github.com/sterlingwes/datetimepicker/issues/412)) ([8ccb07a](https://github.com/sterlingwes/datetimepicker/commit/8ccb07ace9d3a5df9cf33f4f476325247cb6372c))
* add minute interval on Android ([#177](https://github.com/sterlingwes/datetimepicker/issues/177)) ([c6c6738](https://github.com/sterlingwes/datetimepicker/commit/c6c67382dec08fde3cf5e0f21ce66d891e14e17c))
* add timeZoneName prop ([#744](https://github.com/sterlingwes/datetimepicker/issues/744)) ([d136216](https://github.com/sterlingwes/datetimepicker/commit/d1362168950575a2bb7e3d1690e0a2238b68c23f))
* added typescript definitions ([d651252](https://github.com/sterlingwes/datetimepicker/commit/d65125295bb45b444741ed1a1d4f5cb5565d4333))
* added typescript definitions ([e614ae1](https://github.com/sterlingwes/datetimepicker/commit/e614ae1d32cdd9cd0b866f94cc9991a36b1b12c7))
* Allow overriding theme variant used by native ios picker ([#457](https://github.com/sterlingwes/datetimepicker/issues/457)) ([1fb6a2e](https://github.com/sterlingwes/datetimepicker/commit/1fb6a2e1c4aca448172e240c4450eb1b48bf16f5))
* **android:** :sparkles: enables theme overlays for material 3 date pickers ([#961](https://github.com/sterlingwes/datetimepicker/issues/961)) ([612a197](https://github.com/sterlingwes/datetimepicker/commit/612a197a6341bc9d15ff353788aa570d0c2479cb))
* **android:** add custom label for positive and negative button  ([#609](https://github.com/sterlingwes/datetimepicker/issues/609)) ([b6bfd45](https://github.com/sterlingwes/datetimepicker/commit/b6bfd45cf9e1424eb5bb47a2ae515b63a26749b8))
* **android:** add testID support to date (not time) picker ([#705](https://github.com/sterlingwes/datetimepicker/issues/705)) ([e571d71](https://github.com/sterlingwes/datetimepicker/commit/e571d71ee5c5cee9680d32d4944a4b4e86c7b506))
* **android:** change dialog buttons text color ([#689](https://github.com/sterlingwes/datetimepicker/issues/689)) ([6281f93](https://github.com/sterlingwes/datetimepicker/commit/6281f93617df86b334dc4e7dfdd502b9530c9367))
* **android:** enable customizing first day of week ([#902](https://github.com/sterlingwes/datetimepicker/issues/902)) ([3b63563](https://github.com/sterlingwes/datetimepicker/commit/3b635633844864cdfd7a109ffe927e271872213e))
* **android:** material 3 pickers ([#952](https://github.com/sterlingwes/datetimepicker/issues/952)) ([e81c6a1](https://github.com/sterlingwes/datetimepicker/commit/e81c6a12e11ac2cb943529b71ba3226658ac9cac))
* **android:** new arch support ([#730](https://github.com/sterlingwes/datetimepicker/issues/730)) ([17c28e7](https://github.com/sterlingwes/datetimepicker/commit/17c28e73cda2d901d3dd603eb32e4a5307142d25))
* create expo plugin to customize native style ([#801](https://github.com/sterlingwes/datetimepicker/issues/801)) ([66235db](https://github.com/sterlingwes/datetimepicker/commit/66235dbe10ddb640e4d28558a2677f24a9bf2bf5))
* expose imperative api for android picker ([#574](https://github.com/sterlingwes/datetimepicker/issues/574)) ([5861042](https://github.com/sterlingwes/datetimepicker/commit/586104229097a73b00cfc128101e773d62893122))
* improve, document module testability ([#587](https://github.com/sterlingwes/datetimepicker/issues/587)) ([9e27cb1](https://github.com/sterlingwes/datetimepicker/commit/9e27cb1a278b8a3f6ddadf6efeef71745510eff4))
* **ios:** add Fabric support ([#657](https://github.com/sterlingwes/datetimepicker/issues/657)) ([8df590b](https://github.com/sterlingwes/datetimepicker/commit/8df590b51e80dfa5cd81bb5a4281de2f6ce139e5))
* **ios:** add visionOS support ([#884](https://github.com/sterlingwes/datetimepicker/issues/884)) ([103c7af](https://github.com/sterlingwes/datetimepicker/commit/103c7af10ba265b67450f44ad24c6a35454396aa))
* **ios:** dismiss detection support ([#671](https://github.com/sterlingwes/datetimepicker/issues/671)) ([09bb6ea](https://github.com/sterlingwes/datetimepicker/commit/09bb6ea75e7c8d524cbb6099ed88a21140dd3b1f))
* **ios:** support passing view props ([#693](https://github.com/sterlingwes/datetimepicker/issues/693)) ([2e6504f](https://github.com/sterlingwes/datetimepicker/commit/2e6504f893e969d7c2389a968c140986a83d2f56))
* move module out of RNC npm scope ([#404](https://github.com/sterlingwes/datetimepicker/issues/404)) ([c618613](https://github.com/sterlingwes/datetimepicker/commit/c6186133afbaace59c82ce0c5b0ce138e710c383))
* release v7 ([#740](https://github.com/sterlingwes/datetimepicker/issues/740)) ([8417ff9](https://github.com/sterlingwes/datetimepicker/commit/8417ff9f9afe415398807c3a52dad55a71a47cad))
* remove deprecated react native api usages ([#950](https://github.com/sterlingwes/datetimepicker/issues/950)) ([1ff05e1](https://github.com/sterlingwes/datetimepicker/commit/1ff05e180817318a99e086643f89ddd4e8ff5549))
* remove jest/setup.js ([#793](https://github.com/sterlingwes/datetimepicker/issues/793)) ([67a737e](https://github.com/sterlingwes/datetimepicker/commit/67a737e6704b11e8d4a7774572d918ad41f9344f))
* remove locale prop ([#540](https://github.com/sterlingwes/datetimepicker/issues/540)) ([6637c03](https://github.com/sterlingwes/datetimepicker/commit/6637c03fbb430265e8cdac2cd3972bddfde1c75a))
* RN 0.73 compatibility ([#772](https://github.com/sterlingwes/datetimepicker/issues/772)) ([f5cf86e](https://github.com/sterlingwes/datetimepicker/commit/f5cf86e294cb5c74259732eceeb898c81662069f))
* support preferredDatePickerStyle in iOS 14 ([#246](https://github.com/sterlingwes/datetimepicker/issues/246)) ([e96f061](https://github.com/sterlingwes/datetimepicker/commit/e96f0617b43017e9b83a1ed30b762aa4c3f6c585))
* support timezone offset on Android  ([#396](https://github.com/sterlingwes/datetimepicker/issues/396)) ([90f0d20](https://github.com/sterlingwes/datetimepicker/commit/90f0d20baf47f0a49ad8f7d09fbf57748389d03b))
* support timeZoneOffsetInMinutes for date mode on android ([#407](https://github.com/sterlingwes/datetimepicker/issues/407)) ([9eef368](https://github.com/sterlingwes/datetimepicker/commit/9eef36872cf4aa49bf0638d92da76cbd3a507500))
* update podspec ([#776](https://github.com/sterlingwes/datetimepicker/issues/776)) ([bd9f363](https://github.com/sterlingwes/datetimepicker/commit/bd9f363b97da6936caec5c4fcea3e03e3207c3cf))
* **windows:** accessibilityLabel support ([#805](https://github.com/sterlingwes/datetimepicker/issues/805)) ([0228eca](https://github.com/sterlingwes/datetimepicker/commit/0228eca393e76aceac802dcda9e4669261b177b3))
* **windows:** bump WindowsTargetPlatformMinVersion ([#757](https://github.com/sterlingwes/datetimepicker/issues/757)) ([a45302b](https://github.com/sterlingwes/datetimepicker/commit/a45302b302f446340aa27bd19fd0ae3634809019))


### Bug Fixes

* (android) fix issue with minimumDate/maximumDate when using timeZoneOffsetInMinutes ([#519](https://github.com/sterlingwes/datetimepicker/issues/519)) ([bdf6179](https://github.com/sterlingwes/datetimepicker/commit/bdf6179faedcec067692d29e5a33bb7ba421f307))
* add ios.componentProvider to codegenConfig ([#981](https://github.com/sterlingwes/datetimepicker/issues/981)) ([5c58b3c](https://github.com/sterlingwes/datetimepicker/commit/5c58b3c99a2cf467f9adeb515bd5a53f0b35a001))
* add missing pbxproj for autolinking ([#659](https://github.com/sterlingwes/datetimepicker/issues/659)) ([f4efa58](https://github.com/sterlingwes/datetimepicker/commit/f4efa58b66d2656e2ffcd94357ac90b6318725ba))
* android button labels not working ([#648](https://github.com/sterlingwes/datetimepicker/issues/648)) ([b7e1a0c](https://github.com/sterlingwes/datetimepicker/commit/b7e1a0c16e82bcf715278892a990389f0ff89656))
* android spinner not working with latest build sdk ([#418](https://github.com/sterlingwes/datetimepicker/issues/418)) ([bd79efe](https://github.com/sterlingwes/datetimepicker/commit/bd79efee90b9fa6cdfd81f013a1982e9273cec81))
* **android:** bring back parent dialog theme ([#680](https://github.com/sterlingwes/datetimepicker/issues/680)) ([53703fa](https://github.com/sterlingwes/datetimepicker/commit/53703fa1c49c0e55c19aacf877a5243d38e3f1b7))
* **android:** gradle 8 compatibility ([#791](https://github.com/sterlingwes/datetimepicker/issues/791)) ([63c9804](https://github.com/sterlingwes/datetimepicker/commit/63c9804ba494c9b6e1c142ca407a85c6b1e1e925))
* **android:** improve color resource handling in Common.java ([#913](https://github.com/sterlingwes/datetimepicker/issues/913)) ([8527354](https://github.com/sterlingwes/datetimepicker/commit/852735474573db50ef09fea885b8bb3d1ebdc81e))
* **android:** improve spinner buttons contrast ([#674](https://github.com/sterlingwes/datetimepicker/issues/674)) ([228587e](https://github.com/sterlingwes/datetimepicker/commit/228587ef24f26293dfd2116dfc897f42adc24eee))
* **android:** keep date between min and max ([#699](https://github.com/sterlingwes/datetimepicker/issues/699)) ([91245a1](https://github.com/sterlingwes/datetimepicker/commit/91245a17bb0bbbd18d75592ba751dcddd63a1cb3))
* **android:** mark context as final ([#723](https://github.com/sterlingwes/datetimepicker/issues/723)) ([490dead](https://github.com/sterlingwes/datetimepicker/commit/490dead4cb0250b73dbe98afb7d8281854b3e3f9))
* **android:** re-enable setting max date ([#908](https://github.com/sterlingwes/datetimepicker/issues/908)) ([1d966e6](https://github.com/sterlingwes/datetimepicker/commit/1d966e6ffa999f4ff15e3b70192c63cf998f5e49))
* **android:** remove deprecated activity getter ([#1003](https://github.com/sterlingwes/datetimepicker/issues/1003)) ([f4b046a](https://github.com/sterlingwes/datetimepicker/commit/f4b046ac272d0189f592d92e8d182382ea7dc1c7))
* **android:** spinner buttons were invisible ([#673](https://github.com/sterlingwes/datetimepicker/issues/673)) ([9b5a631](https://github.com/sterlingwes/datetimepicker/commit/9b5a6316b36503249196e4529817807c9f9a701e))
* **android:** time picker spinner to consider keyboard input ([#661](https://github.com/sterlingwes/datetimepicker/issues/661)) ([b6ed713](https://github.com/sterlingwes/datetimepicker/commit/b6ed713dc615242981f9b69425d955a0f4e9d8ca))
* avoid crashing on web ([#625](https://github.com/sterlingwes/datetimepicker/issues/625)) ([69589a0](https://github.com/sterlingwes/datetimepicker/commit/69589a0e66b41a22ad193aec52c3b7b9b95e4830))
* Break in Windows JS following [#574](https://github.com/sterlingwes/datetimepicker/issues/574) ([#605](https://github.com/sterlingwes/datetimepicker/issues/605)) ([24f3452](https://github.com/sterlingwes/datetimepicker/commit/24f345239a147f2a4d2313098aa04a22bd27e4b6))
* bump minimum iOS version to match RN support ([#353](https://github.com/sterlingwes/datetimepicker/issues/353)) ([20c9d67](https://github.com/sterlingwes/datetimepicker/commit/20c9d67c2f9abf8f41b332bf8bff03d669c2106b))
* call lifecycle addObserver on main thread ([#347](https://github.com/sterlingwes/datetimepicker/issues/347)) ([39a1a61](https://github.com/sterlingwes/datetimepicker/commit/39a1a612b87b96a06c1d0bead547cefc282f7236))
* change specs to support RN 70 ([#748](https://github.com/sterlingwes/datetimepicker/issues/748)) ([850f033](https://github.com/sterlingwes/datetimepicker/commit/850f03382e7f2fe2d67d78c3af73d3a62124acfd))
* **ci:** correct repo url ([#1018](https://github.com/sterlingwes/datetimepicker/issues/1018)) ([933f8dd](https://github.com/sterlingwes/datetimepicker/commit/933f8dd39190b3e89034b843456d06d84cf7b278))
* classCastException on Huawei devices with android 7.0 ([#329](https://github.com/sterlingwes/datetimepicker/issues/329)) ([#434](https://github.com/sterlingwes/datetimepicker/issues/434)) ([671435e](https://github.com/sterlingwes/datetimepicker/commit/671435e20da4c1b6d627933d871494f82fb7cbd2))
* compute date picker dimensions in native ([#656](https://github.com/sterlingwes/datetimepicker/issues/656)) ([a34f667](https://github.com/sterlingwes/datetimepicker/commit/a34f667cce4157d3676be975e33a67976424a030))
* dismiss android datepicker dialog upon unmount ([#337](https://github.com/sterlingwes/datetimepicker/issues/337)) ([62abaff](https://github.com/sterlingwes/datetimepicker/commit/62abaffa2e56711c6443ae27170c7ea648786a18))
* dismiss android time picker on unmount ([#436](https://github.com/sterlingwes/datetimepicker/issues/436)) ([d4b298d](https://github.com/sterlingwes/datetimepicker/commit/d4b298d192f3871aecd745b9eedabbf66a34e9ca))
* distribute jest folder in npm ([#641](https://github.com/sterlingwes/datetimepicker/issues/641)) ([a953390](https://github.com/sterlingwes/datetimepicker/commit/a95339031d01a11616fdab8cf8697dfe20180b20))
* do not animate set date on ios ([#442](https://github.com/sterlingwes/datetimepicker/issues/442)) ([b8ef9f0](https://github.com/sterlingwes/datetimepicker/commit/b8ef9f0c916e66131ffa4c0fa7695d01641be67c))
* do not update android dialog on each re-render ([#374](https://github.com/sterlingwes/datetimepicker/issues/374)) ([16bff74](https://github.com/sterlingwes/datetimepicker/commit/16bff7487463e04b70e10ca808b19e62627d5c7b))
* do not use reactNativeVersion in build.gradle ([#720](https://github.com/sterlingwes/datetimepicker/issues/720)) ([e848f31](https://github.com/sterlingwes/datetimepicker/commit/e848f3118ec2990117dd31797df0d323c4bdfc71))
* expo plugin using getAppThemeGroup ([#978](https://github.com/sterlingwes/datetimepicker/issues/978)) ([4726566](https://github.com/sterlingwes/datetimepicker/commit/472656698aa5fe3fbff6ab287d8026960289a129))
* **fabric:** fix Fabric component & TM specs for new architecture ([#877](https://github.com/sterlingwes/datetimepicker/issues/877)) ([bd7c078](https://github.com/sterlingwes/datetimepicker/commit/bd7c0780ed4d006c54bc49d928cc9e4e2bf1c0b6))
* fix link in readme ([#207](https://github.com/sterlingwes/datetimepicker/issues/207)) ([162c9be](https://github.com/sterlingwes/datetimepicker/commit/162c9be8888d25d283d69bcf3587eaa5f53e2705))
* force Java version on CI ([#896](https://github.com/sterlingwes/datetimepicker/issues/896)) ([7b0541d](https://github.com/sterlingwes/datetimepicker/commit/7b0541dcf42c68323c0a66b10c7dc93bbad8ec0b))
* hide calender view when spinner mode is selected on android tablets ([#601](https://github.com/sterlingwes/datetimepicker/issues/601)) ([e3854e9](https://github.com/sterlingwes/datetimepicker/commit/e3854e96c2ce5a1699881cf0574b8a2ed6c7e8b8))
* ignore node version on yarn install ([#471](https://github.com/sterlingwes/datetimepicker/issues/471)) ([3c39559](https://github.com/sterlingwes/datetimepicker/commit/3c39559171983f5bf12d29ab94c425ea4be89143))
* **ios:** add countdown to UIDatePickerMode converter  ([#804](https://github.com/sterlingwes/datetimepicker/issues/804)) ([c2d9a6e](https://github.com/sterlingwes/datetimepicker/commit/c2d9a6e4989727b3d4b53d8bda9727a8e0e21303))
* **ios:** avoid min&gt;max date picker crash ([#1009](https://github.com/sterlingwes/datetimepicker/issues/1009)) ([08db857](https://github.com/sterlingwes/datetimepicker/commit/08db8575d7167d03a8aa2aeaade84957f2ddc0ba))
* **ios:** header import ([#841](https://github.com/sterlingwes/datetimepicker/issues/841)) ([2448886](https://github.com/sterlingwes/datetimepicker/commit/24488867022f11bcd573c999e3b926889633f357))
* **ios:** minuteInterval breaks minimumDate ([#992](https://github.com/sterlingwes/datetimepicker/issues/992)) ([5266faf](https://github.com/sterlingwes/datetimepicker/commit/5266faffe714e8dc0ea3fc82a6ab57d2d33c4a0d))
* **ios:** picker width too small ([#675](https://github.com/sterlingwes/datetimepicker/issues/675)) ([f4767e8](https://github.com/sterlingwes/datetimepicker/commit/f4767e8cba2bbb5b6c753ba4a1ed934114753ea7))
* **ios:** remove potential division by zero minute interval ([#997](https://github.com/sterlingwes/datetimepicker/issues/997)) ([e65a5d3](https://github.com/sterlingwes/datetimepicker/commit/e65a5d3defad5c600dca065af5be1c77453d6e23))
* **ios:** use YGNodeConstRef in shadow view ([#868](https://github.com/sterlingwes/datetimepicker/issues/868)) ([765ddf8](https://github.com/sterlingwes/datetimepicker/commit/765ddf8d25671d247e847c916b158397a036b82b))
* lint with prettier ([becd194](https://github.com/sterlingwes/datetimepicker/commit/becd19435d688c51fdb1cdd5916d7e9cfbf339fe))
* move all fragment work to UI thread ([#356](https://github.com/sterlingwes/datetimepicker/issues/356)) ([267a20f](https://github.com/sterlingwes/datetimepicker/commit/267a20fbdb1e2220e80b0bea8c9068f6e07cf2df))
* move ios fabric files to ios folder ([#669](https://github.com/sterlingwes/datetimepicker/issues/669)) ([033026c](https://github.com/sterlingwes/datetimepicker/commit/033026c2d6af4301220b37a09568fada730a3fbd))
* new arch support for 0.74 ([#888](https://github.com/sterlingwes/datetimepicker/issues/888)) ([950cea9](https://github.com/sterlingwes/datetimepicker/commit/950cea98842aecf14d6441c19f0e026be15c4d45))
* only apply button text color fix to spinner ([#685](https://github.com/sterlingwes/datetimepicker/issues/685)) ([3b1db5f](https://github.com/sterlingwes/datetimepicker/commit/3b1db5ff2ed27d0bddc29e660db9e77b139c123f))
* prevent unrecognized selector setHighlightsToday on iOS 14 ([#249](https://github.com/sterlingwes/datetimepicker/issues/249)) ([b8048c0](https://github.com/sterlingwes/datetimepicker/commit/b8048c099c8c46f3e9fc4c55b8d56e6123686aa2))
* remove dependency on upstream RN styles for SpinnerTimePickerDialog and SpinnerTimePickerStyle ([#424](https://github.com/sterlingwes/datetimepicker/issues/424)) ([fcf5943](https://github.com/sterlingwes/datetimepicker/commit/fcf594350884a89a8e65c1d84bac420acfb2c027))
* remove postinstall for example ([#580](https://github.com/sterlingwes/datetimepicker/issues/580)) ([10bf5ca](https://github.com/sterlingwes/datetimepicker/commit/10bf5ca154931c7a3c1b3d4cf11d927c56afbe17))
* remove unnecessary peer dependencies ([#468](https://github.com/sterlingwes/datetimepicker/issues/468)) ([06fbbb1](https://github.com/sterlingwes/datetimepicker/commit/06fbbb1e4b51e467fe15d1f560dcc4367b834103))
* Resolve Missing Deploy Target in Windows ([#311](https://github.com/sterlingwes/datetimepicker/issues/311)) ([5c8d7b0](https://github.com/sterlingwes/datetimepicker/commit/5c8d7b0296e7f40ee3c90df330e3ab6311c2a10f))
* resolve timezoneOffsetInMinutes android bugs ([#472](https://github.com/sterlingwes/datetimepicker/issues/472)) ([b87a0c4](https://github.com/sterlingwes/datetimepicker/commit/b87a0c42e9d5d9184e53fc4fad9006b5e9c423e2))
* return result of android dialog dismissal to JS ([#636](https://github.com/sterlingwes/datetimepicker/issues/636)) ([98335f2](https://github.com/sterlingwes/datetimepicker/commit/98335f25dfd4e0d9f7608254823ec7755fac20a9))
* revert "chore: refer to android styles directly by ID ([#435](https://github.com/sterlingwes/datetimepicker/issues/435))" ([#438](https://github.com/sterlingwes/datetimepicker/issues/438)) ([394ca80](https://github.com/sterlingwes/datetimepicker/commit/394ca80abadf6eacad6fbbae6bba33f511d7b311))
* Revert "feat: move module out of RNC npm scope ([#404](https://github.com/sterlingwes/datetimepicker/issues/404))" ([#405](https://github.com/sterlingwes/datetimepicker/issues/405)) ([4756782](https://github.com/sterlingwes/datetimepicker/commit/4756782f8c00caafeb7f7652baed5f5b471c61b3))
* Revert "fix: android spinner not working with latest build sdk ([#418](https://github.com/sterlingwes/datetimepicker/issues/418))" ([#419](https://github.com/sterlingwes/datetimepicker/issues/419)) ([d2e90b8](https://github.com/sterlingwes/datetimepicker/commit/d2e90b8b7065b59171ca24edf97ba9941cfcaa8f))
* RN Windows Dependency and Example ([#267](https://github.com/sterlingwes/datetimepicker/issues/267)) ([ab9c486](https://github.com/sterlingwes/datetimepicker/commit/ab9c48684d2fb4b0b57d7fa4656110eb9744d533))
* RN windows v0.68 compatibility ([#583](https://github.com/sterlingwes/datetimepicker/issues/583)) ([2b38ceb](https://github.com/sterlingwes/datetimepicker/commit/2b38cebf536a380d017eefa057eecdd461a3cba0))
* support building with xCode 12 ([#588](https://github.com/sterlingwes/datetimepicker/issues/588)) ([9e3a091](https://github.com/sterlingwes/datetimepicker/commit/9e3a09182c0b8fe600c58c1e1b8b964a87f92a75))
* time being reset to 0:00 when date changes ([#417](https://github.com/sterlingwes/datetimepicker/issues/417)) ([a9efbb3](https://github.com/sterlingwes/datetimepicker/commit/a9efbb3f570f2ff948515a8f2f351b62f0e78fe1))
* time picker sometimes resets to previous value ([#234](https://github.com/sterlingwes/datetimepicker/issues/234)) ([fda536b](https://github.com/sterlingwes/datetimepicker/commit/fda536b949649d0a36cb5b2cfc451e23b0a6ee88))
* Update RNDateTimePickerComponentView to import cpp relatively ([#670](https://github.com/sterlingwes/datetimepicker/issues/670)) ([45e3a5e](https://github.com/sterlingwes/datetimepicker/commit/45e3a5e4970077f0eadd582b1f39f75ff1bf2331))
* update simple-plist to fix security vulnerability ([#594](https://github.com/sterlingwes/datetimepicker/issues/594)) ([e3f0b1d](https://github.com/sterlingwes/datetimepicker/commit/e3f0b1d5aef9b5084c20e0a69483d3a6f2eef691))
* use android resource ids instead of names ([#541](https://github.com/sterlingwes/datetimepicker/issues/541)) ([717a76f](https://github.com/sterlingwes/datetimepicker/commit/717a76f3d4046613375352debd16a23109e5746a))
* **windows:** add dll information resource file ([#825](https://github.com/sterlingwes/datetimepicker/issues/825)) ([1860b57](https://github.com/sterlingwes/datetimepicker/commit/1860b57fb9155514be83dbbd701076bb95662183))
* **windows:** ARM64 support ([d39735a](https://github.com/sterlingwes/datetimepicker/commit/d39735a0579a9adaa20d1153b16882f1b9edeba7))
* **windows:** class not registered error ([#710](https://github.com/sterlingwes/datetimepicker/issues/710)) ([84673b2](https://github.com/sterlingwes/datetimepicker/commit/84673b278c0c17b28dc53d2f60ee04ac326ed084))
* **windows:** unable to override WindowsTargetVersion ([#714](https://github.com/sterlingwes/datetimepicker/issues/714)) ([5ad973c](https://github.com/sterlingwes/datetimepicker/commit/5ad973c3005324103c70db9d9db4b0e397127026))
* xcode 12 compatibility ([#293](https://github.com/sterlingwes/datetimepicker/issues/293)) ([3243e61](https://github.com/sterlingwes/datetimepicker/commit/3243e61f81fea8f245523a4c92bb4c98aae17789))


### Miscellaneous Chores

* make CI green ([#527](https://github.com/sterlingwes/datetimepicker/issues/527)) ([da12e92](https://github.com/sterlingwes/datetimepicker/commit/da12e92f206ac90d51bbcf91c6e0f9068136f00d))

## [8.5.0](https://github.com/react-native-datetimepicker/datetimepicker/compare/v8.4.7...v8.5.0) (2025-10-26)


### Features

* remove deprecated react native api usages ([#950](https://github.com/react-native-datetimepicker/datetimepicker/issues/950)) ([1ff05e1](https://github.com/react-native-datetimepicker/datetimepicker/commit/1ff05e180817318a99e086643f89ddd4e8ff5549))

## [8.4.7](https://github.com/react-native-datetimepicker/datetimepicker/compare/v8.4.6...v8.4.7) (2025-10-26)


### Bug Fixes

* **ci:** correct repo url ([#1018](https://github.com/react-native-datetimepicker/datetimepicker/issues/1018)) ([933f8dd](https://github.com/react-native-datetimepicker/datetimepicker/commit/933f8dd39190b3e89034b843456d06d84cf7b278))

## [8.4.6](https://github.com/react-native-datetimepicker/datetimepicker/compare/v8.4.5...v8.4.6) (2025-10-26)


### Bug Fixes

* **ios:** avoid min&gt;max date picker crash ([#1009](https://github.com/react-native-datetimepicker/datetimepicker/issues/1009)) ([08db857](https://github.com/react-native-datetimepicker/datetimepicker/commit/08db8575d7167d03a8aa2aeaade84957f2ddc0ba))

### 2.6.0

- Add time picker for Windows [#206](https://github.com/react-native-community/datetimepicker/pull/206)

### 2.5.0

- feat: add minute interval on Android [#177](https://github.com/react-native-community/datetimepicker/pull/177)

### 2.4.3

- Fix TS typings [#197](https://github.com/react-native-community/datetimepicker/pull/197)
- document working with dark mode [#204](https://github.com/react-native-community/datetimepicker/pull/204)

### 2.4.2

- Make react-native-windows optional [#191](https://github.com/react-native-community/datetimepicker/pull/191)

### 2.4.1

- allow compiling with xcode 10 [#186](https://github.com/react-native-community/datetimepicker/pull/186)

### 2.4.0

- Add Windows date picker [#157](https://github.com/react-native-community/datetimepicker/pull/157)
- Update Example App to RN 0.62.2 [#146](https://github.com/react-native-community/datetimepicker/pull/146)
- throw when invalid props are passed to android picker [#148](https://github.com/react-native-community/datetimepicker/pull/148)
- Recommend npx pod-install for setup instructions [#159](https://github.com/react-native-community/datetimepicker/pull/159)

### 2.3.2

- Fix android nougat display spinner [#118](https://github.com/react-native-community/datetimepicker/pull/118)

### 2.3.1

- fix typescript compilation errors #138, #143
- use yarn for managing deps (this should not influence consumers)

### 2.3.0

- add `textColor` prop for iOS: [#127](https://github.com/react-native-community/datetimepicker/pull/127)

### 2.2.3

- Fix iOS picker's styling bug where picker would be fixed to 216px height no matter what `style` was applied to the picker. This is because previously, the picker was always wrapped in a `View` which was now removed. Since `style` prop was never documented in this package, we do not consider this a breaking change. Now `style` can correctly apply specific height settings and flex. NOTE: this only works with View style property type. [#120](https://github.com/react-native-community/react-native-datetimepicker/pull/120)
- update readme example code [#124](https://github.com/react-native-community/react-native-datetimepicker/pull/124)

### 2.2.2

- Fix android time picker returning today's date instead of the given date [#115](https://github.com/react-native-community/react-native-datetimepicker/pull/115)

### 2.2.1

- Fix missing return statement [#107](https://github.com/react-native-community/react-native-datetimepicker/pull/107)

### 2.2.0

- Fix podspec to get source from tag [#103](https://github.com/react-native-community/react-native-datetimepicker/pull/103)
- fix prettier usage [#102](https://github.com/react-native-community/react-native-datetimepicker/pull/102)
- Introduce neutral button via neutralButtonLabel on Android pickers [#93](https://github.com/react-native-community/react-native-datetimepicker/pull/93)
- update readme [#100](https://github.com/react-native-community/react-native-datetimepicker/pull/100)

### 2.1.2

- Fix Android Nougat datetime picker mode="spinner" [#47](https://github.com/react-native-community/react-native-datetimepicker/pull/47)

### 2.1.1

- Add `countdown` option to iOSMode types [#31](https://github.com/react-native-community/react-native-datetimepicker/pull/31)
- Added TS type definition file path to package.json [#77](https://github.com/react-native-community/react-native-datetimepicker/pull/77)
- Improved readme [#33](https://github.com/react-native-community/react-native-datetimepicker/pull/33), [#39](https://github.com/react-native-community/react-native-datetimepicker/pull/39), [#46](https://github.com/react-native-community/react-native-datetimepicker/pull/46), [#97](https://github.com/react-native-community/react-native-datetimepicker/pull/97)

### 2.1.0

- [#25] Add typescript definitions.
- [#22] Fix backtick in documentation.

### 2.0.0

- [#13] Update to `react-native@0.60`

### 1.0.0

- [#7] Adding Readme.md and docs
- [#6] Detox tests added
- [#5] Adjust CHANGELOG.md to have links at bottom of markdown
- [#4] Fixing iOS React import and cleaning iOS example project
- [#3] Using @react-native-community/eslint-config

[#3]: https://github.com/react-native-community/react-native-datetimepicker/pull/3
[#4]: https://github.com/react-native-community/react-native-datetimepicker/pull/4
[#5]: https://github.com/react-native-community/react-native-datetimepicker/pull/5
[#6]: https://github.com/react-native-community/react-native-datetimepicker/pull/6
[#7]: https://github.com/react-native-community/react-native-datetimepicker/pull/7
[#13]: https://github.com/react-native-community/react-native-datetimepicker/pull/13
[#22]: https://github.com/react-native-community/react-native-datetimepicker/pull/22
[#25]: https://github.com/react-native-community/react-native-datetimepicker/pull/25
