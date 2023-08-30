Feature: occupational identity Scenarios

  Background: login and switch to hse system
    Given user is in login page
    When user enter valid username and password
    And user click on login button
    And user click HSE Link
    And user should logged in and redirected
    Then user click on "مدیریت ریسک"
    Then user click on "شناسنامه شغلی"


  Scenario:  user should not be able register without fill mandatory fields
    Given user click on "ثبت شناسنامه شغلی"
    Then user see disable Register button
    And user search on "پست سازمانی" drop down with "21024402" text
    And user click on "کارشناس ارزیابی و ترفیعات - 21024402"
    Then the following info should be listed:
      |کارشناس اداری|
      |امور منابع انساني و آموزش شهربابک-ارزيابي و ترفيعات شهربابک|
      |مسئول و کارشناس|
      |منطقه کرمان|
      |مدير مجتمع مس شهربابک|
      |معاون پشتيباني شهربابک|
      |امور منابع انساني و آموزش شهربابک|
      |کارگزيني مجتمع مس شهربابک|
      |کارگزيني مس شهربابک|
    Then user see disable Register button
    And  user select "5" day in " تاریخ اعمال" filed
    Then user see disable Register button
    Then user type "فعالیت تست" in activity field
    Then user see disable Register button
    Then user select "فرایندی" item in tree
    Then user see disable Register button


