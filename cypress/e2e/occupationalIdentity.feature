Feature: occupational identity Scenarios

  Background: login and switch to hse system
#    Given user Login With Valid User
    Given user is in login page
    When user enter valid username and password
    And user click on login button
    And user click HSE Link
    And user should logged in and redirected
    Then user click on "مدیریت ریسک"
    Then user click on "شناسنامه شغلی"

#  @Regression
#  Scenario:  user should not be able register without mandatory fields
#
#    Given user click on "ثبت شناسنامه شغلی"
#    Then user see disable Register button
#    And user search on "پست سازمانی" drop down with "21024402" text
#    And user click on "کارشناس ارزیابی و ترفیعات - 21024402"
#    Then user see disable Register button
#    And  user select "5" day in " تاریخ اعمال" filed
#    Then user see disable Register button
#    Then user type "فعالیت تست" in activity field
#    Then user see disable Register button
#    Then user select "فرایندی" item in tree
#    Then user see disable Register button
#    Then user Add danger to list
#    Then user see enable Register button
#
#
#  @Regression
#  Scenario:  user can see correct info about selected post
#    Given user click on "ثبت شناسنامه شغلی"
#    And user search on "پست سازمانی" drop down with "21024402" text
#    And user click on "کارشناس ارزیابی و ترفیعات - 21024402"
#    Then the following info should be listed:
#      |کارشناس اداری|
#      |امور منابع انساني و آموزش شهربابک-ارزيابي و ترفيعات شهربابک|
#      |مسئول و کارشناس|
#      |منطقه کرمان|
#      |مدير مجتمع مس شهربابک|
#      |معاون پشتيباني شهربابک|
#      |امور منابع انساني و آموزش شهربابک|
#      |کارگزيني مجتمع مس شهربابک|
#      |کارگزيني مس شهربابک|
#

  @smoke
  Scenario:  user create occupational identity for a job
    Given user click on "ثبت شناسنامه شغلی"
    And user search on "پست سازمانی" drop down with "21024402" text
    And user click on "کارشناس ارزیابی و ترفیعات - 21024402"
    And  user select "5" day in " تاریخ اعمال" filed
    Then user type "فعالیت اول" in activity field
    Then user select "فرایندی" item in tree
    Then user Add danger to list
    Then user type "فعالیت دوم" in activity field
    Then user select "ایمنی" item in tree
    Then user Add danger to list
    Then user can see with del button in the table
      |فعالیت اول|
      |فعالیت دوم|
    Then user select create button
    Then user can sees the created identity in grid correctly
      | 21024402                                                                                |
      | کارشناس ارزیابی و ترفیعات                                                               |
      | 122020101120                                                                            |
      | 122020101120-امور منابع انسانی و آموزش شهربابک-ارزیابی و ترفیعات شهربابک - 122020101120 |
      | 2                                                                                       |
      | 1402/06/05                                                                              |


