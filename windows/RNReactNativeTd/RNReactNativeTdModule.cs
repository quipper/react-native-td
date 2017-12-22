using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Td.RNReactNativeTd
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeTdModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeTdModule"/>.
        /// </summary>
        internal RNReactNativeTdModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeTd";
            }
        }
    }
}
