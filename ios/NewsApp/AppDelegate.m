/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"
#import <AirshipKit/AirshipKit.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  for (NSString* family in [UIFont familyNames])
  {
    NSLog(@"%@", family);
    for (NSString* name in [UIFont fontNamesForFamilyName: family])
    {
      NSLog(@" %@", name);
    }
  }
  
  // Set log level for debugging config loading (optional)
  // It will be set to the value in the loaded config upon takeOff
  [UAirship setLogLevel:UALogLevelTrace];
  
  // Populate AirshipConfig.plist with your app's info from https://go.urbanairship.com
  // or set runtime properties here.
  UAConfig *config = [UAConfig defaultConfig];
  
  // Call takeOff (which creates the UAirship singleton)
  [UAirship takeOff:config];
  
  // Print out the application configuration for debugging (optional)
  UA_LDEBUG(@"Config:\n%@", [config description]);
  
  // Set the icon badge to zero on startup (optional)
  [[UAirship push] resetBadge];
  
  
  // User notifications will not be enabled until userPushNotificationsEnabled is
  // set YES on UAPush. Onced enabled, the setting will be persisted and the user
  // will be prompted to allow notifications. You should wait for a more appropriate
  // time to enable push to increase the likelihood that the user will accept
  // notifications. For troubleshooting, we will enable this at launch.
  [UAirship push].userPushNotificationsEnabled = YES;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"NewsApp"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
