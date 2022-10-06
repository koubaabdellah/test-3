"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2985],{87418:function(e,t,n){var a=n(67294),r=n(61235),o=n(55491),s=n(98077),i=a.createElement,l=(0,r.createUseStyles)({footerWrapper:{width:"100%"}});t.Z=function(e){var t=e.message,n=l();return i("div",{className:n.footerWrapper},i(s.Z,{height:15}),i(o.xv,{size:"tiny"},t||" No charges will apply during the trial period"))}},78464:function(e,t,n){var a=n(67294),r=n(61235),o=a.createElement,s={grow:"1 0 auto",shrink:"0 1 auto",flexible:"1 1 auto",fit:"0 0 auto"},i=(0,r.createUseStyles)((function(e){var t=e.units;return{column:{flex:function(e){var t=e.flex;return s[t]},paddingLeft:t.gutter/2,paddingRight:t.gutter/2,textAlign:function(e){return e.align},width:function(e){var t=e.flex,n=e.width;return!t&&n}}}}));function l(e){var t=e.children,n=e.flex,a=e.align,r=e.width,s=i({flex:n,align:a,width:r});return o("div",{className:s.column},t)}l.defaultProps={align:null,flex:null,width:null},t.Z=l},79085:function(e,t,n){var a=n(67294),r=n(96486),o=n(55491),s=n(41798),i=n(98906),l=n(98077),u=a.createElement,c=function(e){var t=e.children,n=e.heading,c=e.para,d=e.tooltipText,p=e.tooltipPlace;return u(o.DV,null,u(o.S1,null,u(o.Aj,{inline:!0},u(i.Z,{as:"h4",variant:"xsm-bold"},n),d&&u(o.u,{id:(0,r.kebabCase)(n),place:p},u(o.xv,{as:"span",size:"xsmall",color:"light"},d))),u(l.Z,{height:15}),u(s.Z,{variant:"normalDark"}),u(l.Z,{height:20}),c&&u(a.Fragment,null,u(o.xv,{size:"xsmall"},c),u(l.Z,{height:20})),t))};c.defaultProps={para:null,tooltipText:null,tooltipPlace:"right"},t.Z=c},51473:function(e,t,n){var a=n(67294),r=n(61235),o=a.createElement,s=function(e){switch(e){case"1/2":return 50;case"1/3":return 1/3*100;case"1/4":return 25;case"1/6":return 1/6*100;case"2/3":return 2/3*100;default:return parseFloat(e)}},i={top:"flex-start",middle:"center",bottom:"flex-end"},l=(0,r.createUseStyles)((function(e){var t=e.colors,n=e.units;return{row:{alignItems:function(e){var t=e.wrap,n=e.align;return t?"stretched":i[n]},borderBottomWidth:function(e){return e.bordered&&1},borderBottomColor:function(e){return e.bordered&&t.divider.normal},borderBottomStyle:function(e){return e.bordered&&"solid"},display:"flex",flexWrap:function(e){return e.wrap&&"wrap"},marginLeft:-n.gutter/2,marginRight:-n.gutter/2,marginTop:function(e){return e.gutterTop&&n.rowGutter},marginBottom:function(e){return e.gutterBottom&&n.rowGutter},"&:last-of-type":{borderBottom:"none"}}}}));function u(e){var t=e.children,n=e.wrap,r=e.align,i=e.bordered,u=e.gutterBottom,c=e.gutterTop,d=l({wrap:n,align:r,bordered:i,gutterBottom:u,gutterTop:c}),p=100,h=a.Children.count(t);a.Children.forEach(t,(function(e){e&&e.props.width&&(p-=s(e.props.width),h-=1)}));var m=a.Children.map(t,(function(e){if(e){var t=s(e.props.width)||p/h;return a.cloneElement(e,{width:"".concat(t,"%")})}return null}));return o("div",{className:d.row},m)}u.defaultProps={align:"top",bordered:!1,gutterBottom:!1,gutterTop:!1,wrap:!1},t.Z=u},51741:function(e,t,n){var a=n(67294),r=n(11574),o=a.createElement,s={accountUsage:{accountBalance:"Approximate account balance for the selected billing period. Balance doesn\u2019t include any applicable taxes, fees, or credits.",projectBalance:"Usage and subscription charges associated with the projects in your account for the selected billing period.",userBalance:"Usage and subscription charges associated with users on your account for the selected billing period."},billingPage:{directBillingStatus:"Indicates if your business has been approved for direct billing.",monthlyUsage:o(a.Fragment,null,"Your service usage statistics are only an estimate and may not determine your charges for the month. To view your monthly bill, including taxes and fees, access your",o("strong",null," AT&T Business Center")," or",o("strong",null," AT&T BusinessDirect")," bill.")},billingTable:{subscriptions:"Monthly subscription charges for items such as phone numbers, turnkey applications, and support plans for the selected billing period. Charged in advance at the start of the billing period. Your Standard Developer Support plan automatically renews every month unless you cancel.",usage:"Usage charges are incurred for items such as voice and video minutes of use, messages sent or received, and chat. Usage charges are incurred in the selected billing period.",originatingId:"Unique identifiers such as a phone number or email address, depending on the service used.",terminatingId:"Unique identifiers such as a phone number or email address, depending on the service used.",userColumnHeader:"The name of the user assigned to the subscription. For example, a user assigned to a phone number. For developer support, the assigned user is the user who upgraded to the Standard Developer Support plan. For unassigned subscriptions, the name of the user who purchased the subscription appears.",amountColumnHeader:"The charges for the subscription item by line and quantity for the selected billing period. Balance doesn\u2019t include any applicable taxes, fees, or credits.",dateColumnHeader:o(a.Fragment,null,"The start date reflects the purchased date. ",o("strong",null,"Note:")," Subscriptions automatically renew each month until you cancel. If you cancel your Standard Developer Support plan, your coverage continues until the end of the current support month."),selectableFilter:"Choose to display subscriptions assigned to users, to projects, or unassigned. Standard Developer Support is assigned to a user who purchased it, but the entire account can use it. For unassigned subscriptions, the name of the user who purchased the subscription appears.",selectableUsageFilter:"Displays usage assigned to users, to projects, or unassigned. For unassigned usage, the name of the user who purchased the phone number or application appears."},projectsOverviewPage:{createProject:"To create a project, click create project and complete the steps. To view an existing project, click the project name. After you select your project, you can add users or edit your project settings.",projectId:"The project ID is a unique identifier assigned to the project. It\u2019s used for operational purposes such as troubleshooting, and for billing purposes."},projectDetailOverviewPage:{publicProjectKey:"To authenticate an application or browser-based application associated with this project, enter the public project key value as the client_id.",privateProjectKey:"To authenticate a server-side application associated with this project, enter the value of the private project key as the client_id.",privateProjectSecret:"To authenticate a server-side application associated with this project, enter the value of the private project secret as the client_secret.",projectTotal:"Approximate project total for the selected billing period. Total doesn\u2019t include any applicable taxes, fees, or credits.",projectUsersTotal:"Usage and subscription charges associated with users on the project for the selected billing period.",projectResourcesTotal:"Usage and subscription charges associated with the project for the selected billing period."},usageOverviewPage:"To view your usage summary, use the menu to select a specific time period.",phoneNumbersPage:{assignedTo:{notAssigned:"Not assigned \u2014 Phone isn\u2019t assigned to a project or user.",assigned:"Assigned \u2014 Phone number is assigned to a project or user and the name appears."},tollFreeAssignedTo:{notAssigned:"Not assigned \u2014 Phone isn\u2019t assigned to a project or user.",assigned:"Assigned \u2014 Phone number is assigned to a project or user and the name appears."},e911:"E911 services aren\u2019t supported on unassigned phone numbers. If you want to enable E911 services, assign a phone number to a project or user and validate the address.",status:{onHold:"On hold \u2014 Phone number is being configured and not yet available for service. Configuration may take several minutes to complete.",inService:"In service \u2014 Phone number is configured, available for service, and can be assigned to a project or user."},tollFreeStatus:{onHold:"On hold \u2014 Phone number is being configured and not yet available for service. Configuration may take up to 24 hours to complete",inService:"In service \u2014 Phone number is configured, available for service, and can be assigned to a project or user."}},personalDetailsView:{primaryContact:"Your primary contact is your SIP (Session Initiation Protocol) identity, which is used to make calls and receive calls from other users in your account."},orderConfirmationDialog:{freeTrial:"No subscription or usage charges apply during your free trial account period."},editUserRolesForm:{billing:"Manage billing for the account",project:"Manage projects for the account",admin:"Manage users for the account",buyer:"Manage purchases for the account",developer:"Work on assigned projects"},clickToConnectOrderForm:{chat:"Includes chat capabilities.",multichannel:"Includes chat, voice, video, and screenshare capabilities.",chatbot:"Includes automatic question and response capability.",supervisorAgent:"Includes capabilities to manage agents and schedules.",phoneNumber:"Select a local or\xa0toll-free phone number. Agents can also call customers and this number shows as the caller ID."},virtualDirectoryOrderForm:{virtualDirectory:"Click-to-call directory that you can embed into your website. Most businesses need only 1 Virtual Directory.",phoneNumbers:"You need a minimum of 1 phone number, but you can purchase more later."},projectDetailsForm:{projectName:"Enter no more than 16 characters. You can include special characters except for &, #, %, <, >, {, }, /, ;, \\, ' and \"."},turnkeyApplicationOrderForm:{chat:"Includes chat capabilities.",multichannel:"Includes chat, voice, video and screenshare capabilities.",chatbot:"Includes automatic question and response capability.",supervisor:"Includes capabilities to manage agents and schedules."},mobilePush:{apnForm:"If your project includes a mobile application, you can enter the mobile push registration details you received from Apple.",gcmForm:"If your project includes a mobile application, you can enter the mobile push registration details you received from Google."},anonymousPhoneNumberForm:{label:"Enter any combination of uppercase letters, lowercase letters, numbers, dash, apostrophe and period - up to 20 characters, with no spaces."},searchNumberForm:{city:"If your city search doesn\u2019t show any available phone numbers, widen your search by entering a state in the State field. Make sure to clear the city field."},anonymousCallDestinationPage:{header:o(a.Fragment,null,"To let visitors use your applications, or to accept their calls, you need to set up an anonymous call destination. To assign a phone number to it, click ",o("strong",null,"Assign phone number.")),phoneNumber:o(a.Fragment,null,"To delete one or more anonymous call destinations, select the checkboxes, and then click Delete. To delete all anonymous call destinations, select the top checkbox.")},cancelAvailableProductsForm:{total:"The total number of agent types and add-ons you have purchased.",available:"The number of agent types and add-ons not yet assigned to a user."},purchaseTableCTC:{total:"The total number of agent types and add-ons you have purchased.",available:"The number of agent types and add-ons not yet assigned to a user.",returnAvailableItems:o(a.Fragment,null,"You can return items not assigned to users here.",o("ul",null,o("li",null,"To return items assigned to a user, first select ",o("strong",null,"Manage application")," and delete the user account."," "),o("li",null,"Then select ",o("strong",null,"Return available items")," to complete the return.")),o("strong",null,"Note"),": Chatbot query pack items cannot be returned.")},purchaseTableVD:{total:"The total number of directories you have purchased.",available:"The number of directories you have not yet used.",returnAvailableItems:o(a.Fragment,null,"You can return unassigned directory items here.",o("ul",null,o("li",null,"To return assigned directory items, first select ",o("strong",null,"Manage application")," and delete the directories. Then select ",o("strong",null,"Return available items")," to complete the return.")))},passwordField:o(a.Fragment,null,o("p",null,"Create a strong, memorable password. Your password must:"),o("ul",null,o("li",null,"Be a minimum of ",r.ZP.password.minLength," characters long"),o("li",null,"Contain at least one letter"),o("li",null,"Contain at least one number"),o("li",null,"Contain at least one uppercase character"),o("li",null,"Contain at least one special character"))),account:{status:o(a.Fragment,null,"Status options are ",o("b",null,"Invited"),", ",o("b",null,"Active"),", or ",o("b",null,"Expired"),". The invite link expires after 24 hours. To resend the invitation to the user, click Resend invitation.")},user:{role:o(a.Fragment,null,"By default, users invited to the project are assigned the developer role. Developers can access the project page and use development tools, such as the project keys and self-service APIs.")},disabledUserNameField:"Your username has been assigned for you and can\u2019t be changed. Other users within the account can call you using your username.",inviteUserNameField:o(a.Fragment,null,o("p",null,"Assign a username to the user. The username:"),o("ul",null,o("li",null,"Must be between 1-",r.ZP.username.maxLength," characters long"),o("li",null,"May contain any combination of lowercase letters and numbers"),o("li",null,"May contain these special characters, period and underscore"),o("li",null,"Must not start or end with an underscore or a period"),o("li",null,"Must not start with a number"),o("li",null,"Must not contain uppercase letters")),o("p",null,o("b",null,"Note:")," The username must be unique within the account and can\u2019t be changed.")),createUserNameField:o(a.Fragment,null,o("p",null,"Create a memorable username. Your username:"),o("ul",null,o("li",null,"Must be between 1-",r.ZP.username.maxLength," characters long"),o("li",null,"May contain any combination of lowercase letters and numbers"),o("li",null,"May contain these special characters, period and underscore"),o("li",null,"Must not start or end with an underscore or a period"),o("li",null,"Must not start with a number"),o("li",null,"Must not contain uppercase letters")),o("p",null,o("b",null,"Note:")," Your username must be unique within the account and can\u2019t be changed.")),businessDetailsPage:"Enter your registered business name and address, which may be different from your street, office, or mailing address.",userRolesForm:o(a.Fragment,null,o("p",null,"Select the management roles you wish to assign to the user. These can be changed later."),o("ul",null,o("li",null,(0,r.Zu)(r.BS.ADMIN)," - Can manage users and assign roles to users"),o("li",null,(0,r.Zu)(r.BS.BILLING)," - Can manage the billing preferences"),o("li",null,(0,r.Zu)(r.BS.BUYER)," - Can make purchases up to the overall credit limit of the account"),o("li",null,(0,r.Zu)(r.BS.PROJECT)," - Can create and manage projects in the account"))),msTeamsPhoneNumberPage:{phonenumbers:"The AT&T phone number purchased for use with Direct Routing for Microsoft Teams",assignedTo:o(a.Fragment,null,o("p",null,"Assigned \u2013 Phone number is assigned to a user and the user\u2019s Teams email address is displayed."),o("p",null,"Unassigned - Phone number isn\u2019t assigned to a user.")),type:"The phone numbers can be either local or Toll-free. For the trial, only local numbers are available.",carrier:"For the trial,only AT&T phone numbers are available.",status:o(a.Fragment,null,o("p",null,"On hold - the phone number is being configured and is not yet available for service. Configuration usually takes only a few seconds."),o("p",null,"In service \u2013 Phone number is configured, available for service, and can be assigned to a user."))}};t.Z=s}}]);