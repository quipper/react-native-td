
Pod::Spec.new do |s|
  s.name         = "RNTreasureData"
  s.version      = "0.9.0"
  s.summary      = "RNReactNativeTd"
  s.description  = <<-DESC
                  RNReactNativeTd
                   DESC
  s.homepage     = "https://github.com/quipper/react-native-td"
  s.license      = "APACHE-2.0"
  s.author       = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source        = { :git => 'https://github.com/quipper/react-native-td.git' }
  s.source_files  = "ios/*.{h,m}"
  s.requires_arc = true
  s.dependency "React"
  s.dependency "TreasureData-iOS-SDK"
end
