require 'json'
package = JSON.parse(File.read('./package.json'))

Pod::Spec.new do |s|
  s.name         = "RNTreasureData"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                     An unofficial React Native SDK for Treasure Data.
                     The module is a light-weight layer sitting on-top of the TreasureData SDK for both iOS and Android.
                   DESC
  s.homepage     = "https://github.com/quipper/react-native-td"
  s.license      = package['license']
  s.author       = package['author']
  s.platform     = :ios, "7.0"
  s.source        = { :git => 'https://github.com/quipper/react-native-td.git' }
  s.source_files  = "ios/*.{h,m}"
  s.requires_arc = true
  s.dependency "TreasureData-iOS-SDK"
end
