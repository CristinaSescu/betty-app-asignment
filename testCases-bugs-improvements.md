# Test cases
## Description: Check if the user can successfully register and login on the application (happy flow)

Test step                                                                  Expected result

1.	Navigate to https://ui-test-app.betty.app                              User is on the landing page
2.	Click on 'REGISTER NEW ACCOUNT' button	                               User is redirected to the new account page
3.	Fill in the First Name="Angela", Last Name= "Smith" ,
    Email address=angela_smith@ymail.com, Password="Test1234"	
    and	Click on 'CREATE ACCOUNT' button	                               User is redirected to the login page
                                                                           An alert message is displayed with the following message"Account created
                                                                           Your account has been created, you can now login here"
4.	Fill in the Email address and Password fields 
    and click on 'LOGIN' button	                                           Login is successful, user is redirected to the Home page and a                                                                      title with text "Welcome Angela Smith" is displayed


##	Description: Check if the user cannot register twice with the same Email address

Test step                                                                   Expected result

1.	Navigate to https://ui-test-app.betty.app/new-account                   User is on the registration page
2.	Fill in the First Name="Angela", Last Name= "Smith" ,
 Email address=angela_smith@ymail.com, Password="Test1234"	                Fields are filled in
3.	Click on 'CREATE ACCOUNT' button	                                    An error is displayed with the text "Errorerror: This email already exists" and the user Is still on the new account page


##	Description: Check if the registration fields and buttons are enabled

Test step                                                                    Expected result
1.	Navigate to https://ui-test-app.betty.app/new-account                    User is on the registration page
2.	Check if the title "Create new account" is displayed	                 Title "Create new account" is displayed
Check if button "BACK TO LOGIN" is enabled	Button "BACK TO LOGIN" is enabled
3.	Check if the registration fields are enabled:
First Name
Last Name
Email address
Password                                                                      The registration fields are enabled
4.	Check if button "CREATE ACCOUNT" is enabled	                              Button "CREATE ACCOUNT" is enabled

## Description: Check if the registration fields are mandatory 

Test step                                                                     Expected result

1.	Navigate to https://ui-test-app.betty.app/new-account                     User is on the new-account page
2.	Click on the "CREATE ACCOUNT" button	                                  "This field is required" colored in red  message is written below every field: First Name, Last Name, Email address and Password

## Description: Check the login and logout functionality

Precondition: Already created user account.Email address: angela_smith@ymail.com
                                           Password: Test1234
Test step                                                                      Expected result

1.	Navigate to https://ui-test-app.betty.app/login                            User is on the login page
2.	Fill in the fields with the credentials from the precondition 
and press 'Login' button	                                                   User is successfully logged in and the page header has text "Welcome Angela Smith"
3. Click on Logout button	                                                   User is logged out and is redirected to the login page

## Description: Check the wrong credentials error on the login functionality

Precondition: Already created user account. Email address: angela_Smith@ymail.com
                                            Password: Test1234
Test step                                                                      Expected result

1.	Navigate to https://ui-test-app.betty.app/login                            User is on the login page
2.	Fill in the Email address with angelasmith@ymail.com 
and Password: Test1234 and click on 'Login' button	                           An error message is displayed with the text: You've entered a wrong email address and/or password
3. Clear the fields and try again with the 
Email address: angela_smith@ymail.com and Password: Test12345 
and click on 'Login' button 	                                               An error message is displayed with the text: You've entered a wrong email address and/or password

# Improvements for the registration process:
1. Minimum and maximum length character for the First Name and Last Name.
2. Validation of the email address -> check if the email prefix and domain are in a valid acceptable format.
3. Email address registration field should contain an info message about being case sensitive, not only displaying the text "Invalid value"
4. Add 'one special character' to the Password validation format.
5. After the 'Create account' button is pressed, a confirmation email should be sent on the email address to confirm the registration and have access to the Login page.

# Profile details improvements: 
1. The user should have the possibility to remove the avatar photo.
2. The user should have the possibility to crop the uploaded photo.
3. An info message should be added to inform the user about the maximum size of the uploaded picture and the formats allowed.
4. Success or error info bars should disappear after some seconds ( now you should press x to close it).

# BUGS

1)	Link received on the email to reset the password is not working (major)

Precondition: An already created user (Email address: angela.smith@ymail.com, Password: Test1234)

Steps to reproduce:
1.	Navigate to https://ui-test-app.betty.app/login
2.	Click on 'I FORGOT MY PASSWORD' button
3.	Fill in the email address field with "angela.smith@ymail.com"
4.	Click on 'SEND ME A RECOVERY LINK'
5.	Check your email inbox and access the link received in the email

Actual result: The link cannot be accessed and the following message is displayed: "The site can't be reached"
Expected result: The link should open a page where the new password can be filled in and saved

2)	A new uploaded avatar picture is not displayed on the Profile details unless a refresh action is performed (moderate)

Precondition: An already created user (Email address: angela.smith@ymail.com, Password: Test1234)

Steps to reproduce:
1.  Navigate to https://ui-test-app.betty.app/login
2. Login with the user credentials given in the precondition
3. Click on My account navigation button
4. Click on 'UPLOAD' button 
5. Select a picture to upload and then click Open
6. Click on 'SAVE CHANGES' button

Actual result: The avatar picture is not updated, unless the browser refresh button is pressed
Expected result: The avatar picture should've been updated after the 'Save changes' actions 

3) Unnecessary scrollbar on the navigation bar(minor)

Precondition: An already created user (Email address: angela.smith@ymail.com, Password: Test1234)

Steps to reproduce:
1.  Navigate to https://ui-test-app.betty.app/login
2. Login with the user credentials given in the precondition
3. Check the right side of the Navigation bar 

Actual result: There is an unnecessary scrollbar displayed
Expected result: Shouldn't be a scrollbar displayed

4) Incorrect error message displayed after user tries to register with an already registered account

Precondition: An already created user (Email address: angela.smith@ymail.com, Password: Test1234)

Steps to reproduce:
1.  Navigate to https://ui-test-app.betty.app/new-account
2. Fill in the registration fields with: First Name= Sarah, Last Name = Smith, Email address: angela.smith@ymail.com, Password: Test123456
3. Click on the 'CREATE ACCOUNT'  button

Actual result: The following error message is displayed "error: This email already exists"
Expected result: The following error message should be displayed: "This email already exists"
Note: Also found on 'Update Password' functionality (error: Please fill in your current password)
ss
5) Update password fields not cleared out after 'Save changes' action

Precondition: An already created user (Email address: angela.smith@ymail.com, Password: Test1234)

Steps to reproduce:
1.  Navigate to https://ui-test-app.betty.app/login
2. Login with the user credentials given in the precondition
3. Click on 'My account' navigation menu item
4. Click on 'Update password' button on the left
5. Fill in the Current password, the New and Cofirmed passwords
6. Click on 'Save changes'
7. Check the fields

Actual result: Password fields are still filled in 
Expected result: Password fields should've been cleared out 
Note: Click on the 'Profile details' button on the left and then click back on 'Update password' - password fields still not cleared up.



