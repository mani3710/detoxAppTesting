module.exports = {
    apps: {
        'ios.debug': {
            type: 'ios.app',
            binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/detox.app',
            build: 'xcodebuild -workspace ios/detox.xcworkspace -scheme detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
        },
        'ios.release': {
            type: 'ios.app',
            binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/detox.app',
            build: 'xcodebuild -workspace ios/detox.xcworkspace -scheme detox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
        },
        'android.debug': {
            type: 'android.apk',
            build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
            binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk'
        },
        'android.release': {
            type: 'android.apk',
            build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
            binaryPath: 'android/app/build/outputs/apk/release/app-release.apk'
        },
    },
    devices: {
        simulator: {
            type: 'ios.simulator',
            device: {
                type: 'iPhone 15 Pro',
            },
        },
        attached: {
            type: 'android.attached',
            device: {
                adbName: '.*', 
            },
        },
        emulator: { 
            type: 'android.emulator',
            device: {
                avdName: 'Nexus',
            },
        },
    },
    configurations:{
        "ios.sim.debug":{
            "device":"simulator",
            "app":"ios.debug"
        },
        "ios.sim.release":{
            "device":"simulator",
            "app":"ios.release"
        },
        "android.emu.debug":{
            "device":"emulator",
            "app":"android.debug"
        },
        "android.emu.release":{
            "device":"emulator",
            "app":"android.release"
        },
       
    }
}