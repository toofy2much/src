(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"++Bh":function(e,E,t){"use strict";function _(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(E,"a",(function(){return _}))},"/3ys":function(e,E,t){"use strict";t.d(E,"a",(function(){return o}));var _=t("H+61"),r=t("UlJF"),o=function(){function e(){Object(_.a)(this,e)}return Object(r.a)(e,null,[{key:"get",value:function(e,E){var t,_;try{t=localStorage.getItem(e)}catch(r){}if(null===t||void 0===t)return null;try{_=JSON.parse(t)}catch(r){}return null===_||void 0===_||E&&typeof _!==E?null:_}},{key:"set",value:function(e,E){try{localStorage.setItem(e,JSON.stringify(E))}catch(t){}}}]),e}()},"6FTQ":function(e,E,t){"use strict";function _(e,E){(null==E||E>e.length)&&(E=e.length);for(var t=0,_=new Array(E);t<E;t++)_[t]=e[t];return _}t.d(E,"a",(function(){return _}))},"8oxB":function(e,E){var t,_,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(E){try{return t.call(null,e,0)}catch(E){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{_="function"===typeof clearTimeout?clearTimeout:n}catch(e){_=n}}();var T,a=[],s=!1,I=-1;function S(){s&&T&&(s=!1,T.length?a=T.concat(a):I=-1,a.length&&d())}function d(){if(!s){var e=i(S);s=!0;for(var E=a.length;E;){for(T=a,a=[];++I<E;)T&&T[I].run();I=-1,E=a.length}T=null,s=!1,function(e){if(_===clearTimeout)return clearTimeout(e);if((_===n||!_)&&clearTimeout)return _=clearTimeout,clearTimeout(e);try{_(e)}catch(E){try{return _.call(null,e)}catch(E){return _.call(this,e)}}}(e)}}function O(e,E){this.fun=e,this.array=E}function c(){}r.nextTick=function(e){var E=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)E[t-1]=arguments[t];a.push(new O(e,E)),1!==a.length||s||i(d)},O.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=c,r.addListener=c,r.once=c,r.off=c,r.removeListener=c,r.removeAllListeners=c,r.emit=c,r.prependListener=c,r.prependOnceListener=c,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8rE2":function(e,E,t){"use strict";t.d(E,"a",(function(){return r}));var _=t("6FTQ");function r(e,E){if(e){if("string"===typeof e)return Object(_.a)(e,E);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(_.a)(e,E):void 0}}},"H+61":function(e,E,t){"use strict";function _(e,E){if(!(e instanceof E))throw new TypeError("Cannot call a class as a function")}t.d(E,"a",(function(){return _}))},"T/aA":function(e,E,t){"use strict";function _(e){if(Array.isArray(e))return e}t.d(E,"a",(function(){return _}))},UlJF:function(e,E,t){"use strict";function _(e,E){for(var t=0;t<E.length;t++){var _=E[t];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}}function r(e,E,t){return E&&_(e.prototype,E),t&&_(e,t),e}t.d(E,"a",(function(){return r}))},Zui2:function(e,E){function t(e,E,t){switch(t.length){case 0:return e.call(E);case 1:return e.call(E,t[0]);case 2:return e.call(E,t[0],t[1]);case 3:return e.call(E,t[0],t[1],t[2])}return e.apply(E,t)}var _=Math.max;var r,o,n=(r=function(e,E){return function(e,E,t){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout((function(){e.apply(void 0,t)}),E)}(e,1,E)},o=_(void 0===o?r.length-1:o,0),function(){for(var e=arguments,E=-1,n=_(e.length-o,0),i=Array(n);++E<n;)i[E]=e[o+E];E=-1;for(var T=Array(o+1);++E<o;)T[E]=e[E];return T[o]=i,t(r,this,T)});e.exports=n},cpVT:function(e,E,t){"use strict";function _(e,E,t){return E in e?Object.defineProperty(e,E,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[E]=t,e}t.d(E,"a",(function(){return _}))},oI91:function(e,E){e.exports=function(e,E,t){return E in e?Object.defineProperty(e,E,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[E]=t,e}},xvhg:function(e,E,t){"use strict";t.d(E,"a",(function(){return n}));var _=t("T/aA");var r=t("8rE2"),o=t("++Bh");function n(e,E){return Object(_.a)(e)||function(e,E){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],_=!0,r=!1,o=void 0;try{for(var n,i=e[Symbol.iterator]();!(_=(n=i.next()).done)&&(t.push(n.value),!E||t.length!==E);_=!0);}catch(T){r=!0,o=T}finally{try{_||null==i.return||i.return()}finally{if(r)throw o}}return t}}(e,E)||Object(r.a)(e,E)||Object(o.a)()}},yrdD:function(e,E){var t={FEATURED_CLASSROOMS_COMMUNITY_SPLIT_TEST:"Featured Classrooms Community Split Test May31",FEATURED_CLASSROOMS_CLOSED:"Featured Classrooms Closed",FEATURED_CLASSROOMS_CLICKED:"Featured Classrooms Clicked",LOGGED_IN:"Logged In",SIGNED_UP:"Signed Up",ACCOUNT_SIGNUP_CLICKED:"Clicked Sign Up",HIRING_VIEWED:"Hiring Viewed",SUBSCRIBED_TO_PRO:"Subscried to Pro",BECAME_A_TEACHER:"Became a Teacher",BECAME_A_STUDENT:"Became a Student",BECAME_A_SELF_LEARNER:"Became a Self Learner",CHANGED_PASSWORD:"Changed Password",REACHABILITY:"Reachability",WROTE_TO_GOVAL:"Wrote To Goval",CONSOLE_EVALED:"Console Evaled",CODE_RAN:"Code Ran",PROJECT_RAN:"Project Ran",PROJECT_MODE_ENTERED:"Project Mode Entered",PROJECT_MODE_FILE_CREATED:"Project Mode File Created",LANGUAGE_EXAMPLES_VIEWED:"Examples Viewed",DEBUGGED:"Debugged",UNIT_TESTS_RAN:"Unit Tests Ran",AUTOMATIC_INPUT_STREAM_SET:"Automatic Input Stream Set",GOVAL_FELLBACK:"Goval Fellback",GOVAL_PING:"Goval Ping",GOVAL_ERRORED:"Goval Errored",GOVAL_TIMEOUT:"Goval timeout",GOVAL_PREFLIGHTED:"Goval preflighted",PREFERENCES_OPENED:"Preferences Opened",MODULES_FETCHED:"Modules Fetched",LIBRARIES_SEARCHED:"Libraries Searched",PRETTIERED:"Prettiered",SHELL_OPENED:"Shell Opened",SHELL_COMMAND_EVALED:"Shell Command Evaled",HELP_OPENED:"Help Opened",SESSION_SHARED:"Session Shared",SESSION_SAVED:"Session Saved",SESSION_DETAILS_CHANGED:"Session Details Changed",SESSION_TAGS_ADDED:"Session Tags Added",SESSION_TAGS_REMOVED:"Session Tags Removed",SESSION_TITLE_CHANGED:"Session Title Changed",SESSION_NEW_SPLIT_TEST:"Session New Split Test",SESSION_NEW_HEADER_SPLIT_TEST:"Session New Header Split Test",WS_WORKSPACE_MOUNTED:"Workspace Mounted",WS_ENGINE_LOADED:"Workspace Engine Loaded",WS_EVAL_STOPPED:"Workspace Eval Force Stopped",WS_GOVAL_FILE_ADDED:"Workspace Goval File Added",WS_FILE_RENAMED:"Workspace File Renamed",WS_FILE_DELETED:"Workspace File Deleted",WS_LAYOUT_CHANGED:"Workspace Layout Set",WS_TYPED:"Workspace Typed",WS_EXPANDED_FILE_TREE_NODE:"Workspace Expanded File Tree Node",WS_ACTIVATED_FILE_TREE_NODE:"Workspace Activated File Tree Node",WS_CREATED_FILE_TREE_NODE:"Workspace Created File Tree Node",WS_TOGGLED_FILE_TREE:"Workspace Toggled File Tree",WS_FILE_UPLOAD_STARTED:"Workspace File Upload Started",WS_UPLOADED_FILE:"Workspace Uploaded File",WS_DOWNLOADED_REPL:"Workspace Uploaded Repl",WS_OPENED_FILE_SWITCHER:"Workspace Opened File Switcher",WS_REPL_RUN_LINK_CLICKED:"Workspace Repl Run Link Clicked",WS_REPL_RUN_LINK_SELECTED:"Workspace Repl Run Link Selected",WS_FILE_CLICKED:"Workspace File Clicked",WS_TAB_CLICKED:"Workspace Tab Clicked",WS_REPLCO_UNREACHABLE:"Workspace repl.co Unreachable",ASSIGNMENT_CREATED:"Assignment Created",ASSIGNMENT_UPDATED:"Assignment Updated",ASSIGNMENT_DELETED:"Assignment Deleted",ASSIGNMENT_PUBLISHED:"Assignment Published",ASSIGNMENT_UNPUBLISHED:"Assignment Unpublished",ASSIGNMENT_FILE_CREATED:"Assignment File Created",ASSIGNMENT_FILE_UPDATED:"Assignment File Updated",ASSIGNMENT_FILE_DELETED:"Assignment File Deleted",CLASSROOM_CREATED:"Classroom Created",CLASSROOM_CLONED:"Classroom Cloned",CLASSROOM_DELETED:"Classroom Deleted",CLASSROOM_UPDATED:"Classroom Updated",CLASSROOM_SHARED:"Classroom Shared",CLASSROOM_CONTENT_EXPORT_SUCCESS:"Classroom Content Successfully Exported",CLASSROOM_CONTENT_EXPORT_FAILURE:"Classroom Content Export Failed",STUDENT_UNENROLLED:"Student Unenrolled",STUDENTS_INVITED:"Students Invited",STUDENT_INVITE_DELETED:"Student Invite Deleted",TEACHING_ASSISTANT_DELETED:"Teaching Assistant Deleted",TEACHING_ASSISTANTS_INVITED:"Teaching Assistants Invited",TEACHING_ASSISTANT_INVITE_ACCEPTED:"Teaching Assistant Invite Accepted",SUBMISSION_REVIEWED:"Submission Reviewed",ASSIGNMENT_UNIT_TEST_CREATED:"Assignment Unit Test Created",ASSIGNMENT_UNIT_TEST_UPDATED:"Assignment Unit Test Updated",ASSIGNMENT_UNIT_TEST_DELETED:"Assignment Unit Test Deleted",ASSIGNMENT_UNIT_TEST_META_UPDATED:"Assignment Unit Test Meta Updated",ASSIGNMENT_TEST_CREATED:"Assignment Test Created",ASSIGNMENT_TEST_UPDATED:"Assignment Test Updated",ASSIGNMENT_TEST_DELETED:"Assignment Test Deleted",MODEL_SOLUTION_CREATED:"Model Solution Test Created",MODEL_SOLUTION_UPDATED:"Model Solution Test Updated",MODEL_SOLUTION_DELETED:"Model Solution Test Deleted",MODEL_SOLUTION_FILE_CREATED:"Model Solution File Created",MODEL_SOLUTION_FILE_UPDATED:"Model Solution File Updated",MODEL_SOLUTION_FILE_DELETED:"Model Solution File Deleted",SUBMISSION_CREATED:"Submission Created",SUBMISSION_UPDATED:"Submission Updated",SUBMISSION_DELETED:"Submission Deleted",SUBMISSION_SUBMITTED:"Submission Submitted",SUBMISSION_UNSUBMITTED:"Submission Unsubmitted",SUBMISSION_FILE_CREATED:"Submission File Created",SUBMISSION_FILE_UPDATED:"Submission File Updated",SUBMISSION_FILE_DELETED:"Submission File Deleted",STUDENT_INVITE_ACCEPTED:"Student Invite Accepted",SELF_LEARNER_ENROLLED:"Self Learner Enrolled",CLASSROOM_PRIVACY_TOGGLED:"Classroom Privacy Toggled",COMMUNITY_CLASSROOM_VIEWED:"Community Classroom Viewed",COMMUNITY_CLASSROOM_SHARED:"Community Classroom Shared",COMMUNITY_CLASSROOM_IMPORTED:"Community Classroom Imported",COMMUNITY_ASSIGNMENT_VIEWED:"Community Assignment Viewed",COMMUNITY_TESTS_VIEWED:"Community Tests Viewed",COMMUNITY_TOOLTIP_VIEWED:"Community Tooltip Viewed",COMMUNITY_LINK_CLICKED:"Community Link Clicked",COMMUNITY_INFINITE_SCROLLED:"Community Infinite Scrolled",COMMUNITY_SEARCHED:"Community Searched",COMMUNITY_SPLIT_TEST:"Community Split Test",REPLS_REPL_CREATED:"Repl created",REPLS_REPL_FORKED:"Repl Forked",REPLS_REPL_SELF_FORKED:"Repl Self Forked",REPLS_REPL_OPENED:"Repl opened",REPL_HISTORY_FILE_SELECTED:"Repl History File Selected",REPL_HISTORY_REVISION_DIFFED:"Repl History Revision Diffed",REPL_HISTORY_DAY_EXPANDED:"Repl History Day Expanded",REPL_HISTORY_REVISION_RESTORED:"Repl History Revision Restored",REPL_HISTORY_TEXT_FILE_VIEWED:"Repl History Text File Viewed",REPL_HISTORY_BINARY_FILE_VIEWED:"Repl History Binary File Viewed",FILE_VALUE_CONTAINS_CARRIAGE_RETURN:"File value contains carriage return",WEB_HOSTING_DOMAIN_VISITED:"Web hosting domain visited",WEB_HOSTING_URL_SELECTED:"Web hosting url selected",MY_REPLS_VISITED:"My repls visited",MY_REPLS_REPL_CLICKED:"My repls repl clicked",MY_REPLS_CONTINUE_CODING_CLICKED:"My repls continue coding clicked",MY_REPLS_REPL_DELETED:"My repls repl deleted",MY_REPLS_REPL_EDITED:"My repls repl edited",MY_REPLS_REPL_STARRED:"My repls repl starred",MY_REPLS_PRIVACY_TOGGLED:"My repls privacy toggled",MY_REPLS_MORE_LOADED:"My repls more loaded",MY_REPLS_HISTORY_CLICKED:"My repls history clicked",MY_REPLS_SEARCHED:"My repls searched",MY_REPLS_LANG_FILTERED:"My repls lang filtered",MY_REPLS_STAR_TOGGLED:"My repls star toggled",MY_REPLS_NEW_REPL_CLICKED:"My repls new repl clicked",MY_REPLS_PLUS_CLICKED:"My repls plus clicked",MY_REPLS_TEMPLATES_CLICKED:"My repls templates clicked",SUBMISSION_EXPORTED_TO_REPL:"Submission exported to Repl",MY_REPLS_FILTER_SPLIT_TEST:"My repls split test",MY_REPLS_SEARCH_SPLIT_TEST:"My repls search split test",WS_FILE_TREE_MULTI_TEST:"Workspace File Tree multi test",FORKING_MULTI_TEST:"Self Forking multi test",WS_MONACO_SPLIT_TEST:"Workspace Monaco split test",WS_LIBSEARCH_SPLIT_TEST:"Workspace libsearch split test new",WS_LANG_SERVER_SPLIT_TEST:"Workspace language server split test",NEW_TERMINAL_SPLIT_TEST:"New Terminal split test",OT_SPLIT_TEST:"OT split test",PACKAGES_INSTALLING:"Packages installing",PACKAGES_INSTALLED:"Packages installed",PACKAGES_SELECTED:"Packages selected",PACKAGES_SEARCHED:"Packages searched",BANNER_TOUR_SEEN:"User landed on a page with a banner",BANNER_TOUR_DISMISSED:"User dismissed a tour banner",BANNER_TOUR_CTA_CLICKED:"User clicked an action from a tour banner",WEB_NOTIFICATION_PERM_GRANTED:"User granted permissions for web notifications",WEB_NOTIFICATION_PERM_DENIED:"User denied permissions for web notifications",WEB_NOTIFICATION_PERM_DISMISSED_MODAL:"User dismissed the web notifications modal",NEW_WEBPROJECT_FROM_NOTIFICATION:"Created new web project from notification",NEW_WEBTEMPLATE_FROM_NOTIFICATION:"Looked at template from notification",SERVER_PING:"Server ping",CLIENT_PING:"Client ping",PROJECT_CREATED:"Project created",PROJECT_TEMPLATE_CREATED:"Project template created",PROJECT_CREATED_FROM_NEW_TEMPLATE:"Project was created using the new template CTA",PROJECT_EDITED:"Project edited",PROJECT_DELETED:"Project deleted",PROJECT_SUBMISSION_CREATED:"Student created submission for project",PROJECT_SUBMISSION_VIEWED:"Teacher viewed student submission for project",PROJECT_SPLIT_TEST:"Project split test",BOARD_VISTED:"Board visited",POST_VISTED:"Post visited",COMMENT_VISITED:"Comment visited",POSTS_LOAD_MORE_CLIKED:"Load more posts clicked",POST_VOTES_LOAD_MORE_CLICKED:"Load more post votes clicked",POST_EMBED_WEB_HOSTING_URL_SELECTED:"Web hosting post embed url selected",POST_EMBED_WEB_HOSTING_URL_OPEN_CLICKED:"Web hosting post embed url open clicked",POST_UPVOTED:"Post upvoted",POST_UNVOTED:"Post unvoted",POST_WRITTEN:"Wrote a post",POST_CREATED:"Created a post",POST_EDITED:"Edited a post",POST_DELETED:"Deleted a post",POST_COMMENTS_LOAD_MORE_CLICKED:"Load more comments on post clicked",COMMENT_WRITTEN:"Wrote a comment",COMMENT_CREATED:"Created a comment",COMMENT_EDITED:"Edited a comment",COMMENT_DELETED:"Deleted a comment",COMMENT_UPVOTED:"Comment upvoted",COMMENT_UNVOTED:"Comment unvoted",REPL_SHARED_FACEBOOK:"User clicked to share repl on facebook",REPL_SHARED_TWITTER:"User clicked to share repl on twitter",REPL_SHARED_GIST:"User clicked to create gist",REPL_SHARED_GIST_SUCCESS:"User successfully created a gist",SHARE_ON_REPL_TALK_WS_CLICKED:"Clicked share on repl talk button in ws",SHARE_ON_REPL_TALK_WS_REPL_TALK_ONLY_CLICKED:"Clicked share on repl talk button in ws from talk only share baox",SHARE_ON_DEV_TO_WS_CLICKED:"Clicked share on Dev.to button in ws",CREATED_REPL_TALK_POST_WS:"Created a post on repl talk in ws",CREATED_REPL_TALK_POST_REPL_TALK_ONLY_SHARE_WS:"Created a post on repl talk in ws from talk only share box",WENT_TO_REPL_TALK_POST_WS:"Went to repl talk post in ws",REPL_SHARE_LAYOUT_SPLIT_TEST:"Whether user received new repl share layout",PINNED_REPL_PIN:"User pinned a repl",PINNED_REPL_UNPIN:"User unpinned a repl",PINNED_REPL_VISITED:"Another user visited a pinned repl",VERIFY_EMAIL_SUCCESS:"User verified their email",VERIFY_EMAIL_RESENT:"User requested another email verification",PROFILE_POSTS_LOAD_MORE_CLICKED:"Load more posts on profile clicked",PROFILE_COMMENTS_LOAD_MORE_CLICKED:"Load more comments on profile clicked",PROFILE_REPL_CLICKED:"Repl on a profile was clicked",BOARD_REPORT_ON_COMMENT:"User reported a comment",BOARD_REPORT_ON_POST:"User reported a post",UNSUBSCRIBED_FROM_EMAILS:"Unsubscribed from emails via link in email footer",ONBOARDING_VIEWED_DASHBOARD:"Viewed the welcome message in the dashboard",ONBOARDING_CLICKED_NEW_REPL:"Onboarding flow: clicked to create a new repl",ONBOARDING_CLICKED_QUICKSTART:"Onboarding flow: clicked to access the quick start guide",ONBOARDING_INTENT_SELECTED:"Selected Onboarding Intent",ONBOARDING_REPL_CREATED:"Onboarding Repl Created",TALK_SEARCH_SPLIT_TEST:"Repl Talk Search split test",TALK_SEARCH_USED_SEARCH:"Repl Talk Search was used",TALK_SEARCH_CLICKED_SEARCH_RESULT:"Repl Talk search result was clicked on",LIVE_CODING_SESSION_STARTED:"Live coding session started",LIVE_CODING_SESSION_JOINED:"Live coding session joined",LIVE_CODING_SESSION_ENDED:"Live coding session ended",LIVE_CODING_SESSION_NOT_FOUND:"Live coding session not found",LIVE_CODING_CURSOR_FOLLOWED:"Live coding cursor followed",LIVE_CODING_USER_BANNED:"Live coding user banned",LIVE_CODING_CHAT_MESSAGE_SENT:"Live coding chat message sent",LIVE_CODING_SIDEBAR_OPENED:"Live coding sidebar opened",REMOTE_FILE_CHANGE_PROMPTED:"Remote file change prompted",REMOTE_FILE_CHANGE_ACCEPTED:"Remote file change accepted",REMOTE_FILE_CHANGE_IGNORED:"Remote file change ignored",FOLDER_CREATED:"Folder created",FOLDER_RENAMED:"Folder renamed",FOLDER_DELETED:"Folder deleted",FOLDER_MOVED_ONE_ITEM:"One item was moved into another folder using the modal",FOLDER_MOVED_ONE_ITEM_DND:"One item was moved via drag and drop",FOLDER_MOVED_MULT_ITEMS_DND:"Multiple items were moved via drag and drop",FOLDER_NAVIGATED:"User navigated into a folder",FOLDER_OPENED_REPL:"User opened a repl contained in a folder",CLASS_WEBHOOK_OPENED_MODAL:"Teacher opened modal for webhook",CLASS_WEBHOOK_UPDATED_SETTINGS:"Teacher updated settings for their webhook",CLASS_WEBHOOK_REFRESHED_SECRET:"Teacher freshed their webhooks secret",CLASS_WEBHOOK_EVENT_SENT:"Webhook event was triggered",UNNAMED_REPLS_OPENED:"User looked at their unnamed repls",UNNAMED_REPLS_RENAMED:"User renamed an unnamed repl",UNNAMED_REPLS_MOVED:"User moved an unnamed repl (without renaming)",GITHUB_IMPORT_VISITED:"GHI page visited",GITHUB_IMPORT_FORM_SUBMITTED:"GHI form submitted",GITHUB_IMPORT_INVALID_URL_SUPPLIED:"GHI invalid url supplied",GITHUB_IMPORT_REPO_TOO_BIG:"GHI repo too big",GITHUB_IMPORT_REPO_NOT_EXIST:"GHI repo not exist",GITHUB_IMPORT_CREATION_ERRORED:"GHI creation errored",GITHUB_IMPORT_CREATION_SUCCEEDED:"GHI creation succeeded",GITHUB_IMPORT_URL_SHORTCUT_USED:"GHI user used repo in url to import",GIT_CLIENT_SIDEBAR_OPENED:"Git sidebar opened",GIT_CLIENT_WHAT_IS_GIT_CLICKED:'Git sidebar "What is Git?" clicked',GIT_CLIENT_AUTH_REQUESTED:"Git repository read/write permission requested",GIT_CLIENT_LOCAL_INIT:"Git repository initialized to be on Repl.it",GIT_CLIENT_CLONED:"Git repository cloned",GIT_CLIENT_PULLED:"Git repository pulled from remote",GIT_CLIENT_COMMITTED:"Git repository committed",GIT_CLIENT_REVERTED:"Git repository reverted to previous commit",GIT_CLIENT_CHECKOUT:"Git repository checked out a branch",GIT_CLIENT_ERROR_INDEX_LOCK:"Git action failed due to an index.lock file",GITHUB_API_REPO_CREATION_SUCCESS:"Github repository successfully created",GITHUB_API_ERROR_INSUFFICIENT_SCOPE:"Insufficient scope to access GitHub API",GITHUB_API_ERROR_BAD_CREDENTIALS:"Bad credentials to access GitHub API",GITHUB_API_ERROR_GENERAL:"Unable to access GitHub API",GITHUB_FORK_FAILURE:"Unable to create a fork",CREATION_FLOW_MODAL_VISITED:"Creation flow form modal opened",CREATION_FLOW_LANGUAGE_DROPDOWN_ARROW_CLICKED:"Creation flow language dropdown arrow clicked",CREATION_FLOW_PAGE_VISITED:"Creation flow form page visited",CREATION_FLOW_FORM_SUBMITTED:"Creation flow form submitted",CREATION_FLOW_REPL_CREATED:"Creation flow repl succesfully created",CREATION_FLOW_ERRORED:"Creation flow errored",CREATION_FLOW_SPLIT:"Creation flow split test",TEMPLATES_SPLIT_TEST:"Templates page split test",TEMPLATES_TEMPLATE_CLICKED:"Templates user visited the template",TEMPLATES_AUTHOR_CLICKED:"Templates user visited the author",TEMPLATES_FILTERED_BY_LANG:"Templates user filtered by language",TEMPLATES_DASHBOARD_TOUR_CLICKED:"Templates user clicked on dashboard tour cta",GOVAL2_FELLBACK:"Goval 2 fellback",GOVAL_CONNECTION_FAILED:"Goval connection failed",GOVAL_CONNECTION_ATTEMPTED:"Goval connection attempted",GOVAL_CONNECTION_SUCCEEDED:"Goval connection succeeded",GOVAL2_PING:"Goval 2 ping",GOVAL2_FIRST_PING:"Goval 2 first ping",GOVAL_CONNECTION_STEP:"Goval connection step completed",GOVAL_TIME_TO_CONNECT:"Goval time to connect saved",LORE_USED_OVERRIDE_CLUSTER_METADATA:"Lore used overrideClusterMetadata",LORE_FAILED_METADATA_PREFETCH:"Lore failed to prefetch getConnectionMetadata",HEADER_NOTIFICATIONS_ITEM_CLICKED:"Header notifications item clicked",HEADER_DROPDOWN_NOTIFICATIONS_ITEM_CLICKED:"Header dropdown notifications item clicked",NOTIFICATION_ITEM_CLICKED:"Notification item clicked",FILE_HEADER_TAB_OPENED:"File Header Tab Opened",FILE_HEADER_TAB_REPLACED:"File Header Tab Replaced",FILE_HEADER_TAB_CLOSED:"File Header Tab Closed",COMMENT_SELECTED_AS_ANSWER:"User selected comment as answer",COMMENT_UNSELECTED_AS_ANSWER:"User unselected comment as answer",PAGE_RELOADED:"Page was reloaded",CLASSROOM_ASK_MODAL_LINK_CLICKED:"Post to ask in classroom error modal was clicked",MP2_OPENED_INVITE_MODAL:"Opened invite modal",MP2_INVITED_BY_USERNAME:"Invited a user by username",MP2_INVITED_BY_EMAIL:"Invited a user by email",MP2_REMOVED_USER_PERMISSION:"Removed a user permission",MP2_UNDO_REMOVE_PERMISSION:"User undoed a permission removal",MP2_REMOVED_EMAIL_INVITE:"Removed an email invite",MP2_REFRESHED_PERMISSIONS:"Refreshed user permissions",MP2_REFRESHED_LINK:"Refreshed a link",MP2_USER_JOINED_BY_LINK:"User joined a multiplayer2 session via link",MP2_CHAT_MESSAGE_SENT:"Sent a chat message with mp2",MP2_CHAT_CHANGED_SIDES:"User switched which side chat was on",MP2_VIEWED_ROSTER:"Viewed the mp2 chat roster",MP2_FOLLOWED_CURSOR:"Followed a users cursor in mp2",MP2_USER_JOINED:"User joined the session",MP2_MINIMIZED_CHAT:"User minimized chat",MP2_VISITED_PROFILE:"User visited profile from chat",MP2_CHAT_NOTIFICATION_CREATED:"User received a chat web notification",MP2_CHAT_NOTIFICATION_CLICKED:"User clicked a chat web notification",MP2_INVITED:"User invited collaborator",LANGUAGE_FILTER_CLICK:"User clicked language filter in post list",LANGUAGE_TAG_CLICK:"User clicked language tag in language filter on top of the post list",LANGUAGE_TAG_CLEAR_CLICK:'User clicked "x" on language tag to remove selection',ONBOARDING_QUESTIONS_CTA_CLICKED:"New user clicked on a CTA at the end of onboarding",ONBOARDING_QUESTIONS_LEFT_AT:"New user left the onboarding flow at this stage",ONBOARDING_QUESTIONS_SPLIT_TEST_RECEIVED:"Whether or not the user was shown the new (Summer 2019) onboarding flow",ONBOARDING_QUESTION_SKIPPED:'The user skipped the question by selecting "skip"',POSTS_FEED_SPLIT_TEST:"Whether or not the user was shown the updated posts feed",RECENT_POST_COMMENTS_SPLIT_TEST:"Whether or not the user was shown recent comments on post list item",HOME_VISITED:"User visted home",HOME_INTO_POST_CTA_CLICKED:"User clicked on the introduce yourself CTA",HOME_CREATE_REPL_CTA_CLICKED:"User clicked create repl CTA",HOME_RECENT_REPL_CTA_CLICKED:"User clicked recent repl CTA",HOME_TRENDING_REPL_CTA_CLICKED:"User clicked trending repl CTA",HOME_TUTORIAL_CARD_CTA_CLICKED:"User clicked tutorial card CTA",HOME_POST_FEED_ITEM_CLICKED:"User clicked posts feed item on home",HOME_POST_FEED_VIEW_FEED_CLICKED:"User clicked view feed at the bottom of feed on home",HOME_ALL_REPLS_CTA_CLICKED:"User clicked view all repls under recent repls on home",VERIFY_AND_COMMENT_SPLIT_TEST:'Whether or not the user was shown the "verify and comment" UX',VERIFY_AND_COMMENT_EMAIL_LINK_CLICKED:"User clicked on the link to their email service based on their email domain",VERIFY_AND_COMMENT_RESEND_EMAIL_CLICKED:'User clicked "resend email" in verification step',HOME_SPLIT_TEST:"whether user gets home",HOME_PRIORITIZE_CODE_CTA_SPLIT_TEST:"Whether or not user was shown coding section of home above community (intro post)",ONBOARDING_VERIFY_EMAIL_SPLIT_TEST:"Whether or not a user was shown the verify email CTA during onboarding",SIDEBAR_LAYOUT_NAV_CLICK:"Sidebar layout nav item clicked",SIDEBAR_LAYOUT_HEADER_NOTIFICATIONS_TOGGLED:"Sidebar layout notifications toggled",SIDEBAR_LAYOUT_TOGGLE_CLICKED_AFTER_LOGO:"Sidebar layout toggle clicked after logo",REPL_FROM_REPO_HEADER_IMPORT_CLICKED:"repl from repo header import clicked",REPL_FROM_REPO_IMPORT_STARTED:"repl from repo import started",REPL_FROM_REPO_RUN_CONFIG_COMPLETED:"repl from repo run config completed",GHC_REPL_JOINED:"existing GitHub classroom repl joined",NEW_REPL_MODAL_TAB_CLICKED:"new repl modal tab clicked",NEW_REPL_MODAL_GITHUB_FORM_SUBMITTED:"new repl modal github form submitted",NEW_REPL_MODAL_GITHUB_REPO_SELECTED:"new repl modal github repo selected",NEW_REPL_MODAL_GITHUB_FORM_ERROR:"new repl modal github form error",GITHUB_PAGE_VISITED:"github page visted",GITHUB_PAGE_GITHUB_SIGN_IN:"github page GitHub sign in",GITHUB_PAGE_FORM_SUBMITTED:"github page form submitted",GITHUB_PAGE_REPO_SELECTED:"github page repo selected",GITHUB_PAGE_FORM_ERROR:"github page form error",GLITCH_PAGE_FORM_SUBMITTED:"glitch page form submitted",HOLIDAY_2019_SALE_MODAL_VISITED:"holiday 2019 sale modal visited",EXPIRED_HACKER_PROMPTED:"expired hacker prompted",EXPIRED_HACKER_MADE_PUBLIC:"expired hacker made repl public",UPGRADE_MODAL_VIEWED:"upgrade modal viewed",UPGRADE_MODAL_SUBSCRIPTION_COMPLETED:"upgrade modal subscription completed",SUBSCRIPTION_CONFIRMED:"Subscription Confirmed",SUBSCRIPTION_FAILED:"Subscription Failed",UPGRADE_SELECTED:"Upgrade Selected",PLAN_SELECTED:"Plan Selected",TIME_TO_CODE_STARTED:"Time to code started",TIME_TO_CODE_ENDED:"Time to code ended",DISK_QUOTA_EXCEEDED:"Disk quota exceeded",CPU_USAGE_PCT_FETCHED:"CPU usage pct fetched",MEM_USAGE_MB_FETCHED:"Memory usage mb fetched",HIGH_CPU_UPGRADE_PROMPTED:"high cpu upgrade prompted",RECAPTCHA_FAILED:"Recaptcha failed",HCAPTCHA_FAILED:"HCaptcha failed",USER_STORAGE_USED:"User storage used",COMMAND_BAR_OPENED:"Command bar opened",COMMAND_BAR_COMMAND_SELECTED:"Command bar command selected",COMMAND_BAR_SEARCH:"Command bar search command executed",COMMAND_BAR_FIND_FILE:"Command bar find file command executed",COMMAND_BAR_KEYBOARD_SHORTCUT_USED:"Command bar keyboard shortcut used",AUDIO_PLAYING_STARTED:"Audio playing started",AUDIO_PROMPT_CLOSED:"Audio prompt closed",PUSH_ROUTE_TIME_TAKEN:"Push route time taken",PUSH_ROUTE_TIMED_OUT:"Push route timed out",LOAD_REPLBOX_ENGINE_TIME:"Load replbox time taken",LOAD_REPLBOX_ENGINE_TIMED_OUT:"Load replbox timed out",AG_NOT_AVAILABLE:"Tried to find file but ag was not available",FILE_RECONNECTED_STATUS:"File reconnected status",FILE_RECONNECTED_STATUS2:"File reconnected status two",FILE_RECONNECT_FALLBACK_CHOSEN:"File reconnect fallback chosen",FILE_RECONNECT_IGNORED:"File reconnect ignored",README_CREATED:"README.md created",GQL_SUB_CONNECTED:"GraphQL subscription connected",GQL_SUB_RECONNECTED:"GraphQL subscription reconnected",GQL_SUB_DISCONNECTED:"GraphQL subscription disconnected",ANNOTATION_UPDATE_RECEIVED:"Received annotation update via subscription",ANNOTATION_FASTFORWARDED:"Fastforwarded annotation via fetchOps call",CONVERSATION_MESSAGE_SENT:"Sent a conversations messasge",THREADS_OPENED:"Threads opened via header button",CSRF_NO_REFERRER_OR_ORIGIN_REJECTED:"Csrf no referrer or origin rejected",CSRF_INVALID_REFERRER_OR_ORIGIN_REJECTED:"Csrf invalid referrer or origin rejected",CSRF_NO_X_REQUESTED_WITH_REJECTED:"Csrf no x requested with rejected",PERF_REPL_START_RUN_TIME:"Repl start run time taken",PERF_REPL_START_RUN_PACKAGER_TIME:"Repl start run packager time taken",LSP_CONNECTION_STARTED:"LSP connection started",LSP_CONNECTION_ENDED:"LSP connection ended",LSP_MESSAGE_READ_FAILED:"LSP message read failed",LSP_SERVER_DIED:"LSP Server died",CONTAINER_SERVICE_CONNECTED:"Container service connected to goval",CROSIS_ERROR:"Fatal error in Crosis",CROSIS_CONNECTION_ATTEMPTED:"Attempting to connect to goval",CROSIS_CONNECTION_TIMEOUT:"Crosis connection timeout",CROSIS_CONNECTION_RETRYING:"Retrying to connect in Crosis",CROSIS_CONNECTION_RECONNECTING:"Crosis reconnecting",CROSIS_CONNECTION_FAILED:"Crosis client failed to connect",CROSIS_CONNECTION_FALLING_BACK_TO_POLLING:"Falling back to polling in Crosis",OPEN_CHANNEL_CALLBACK_CALLED:"Open channel callback called",SUBMISSION_CREATION_COLLISION:"Project fork with existing permissions detected",SUBMISSION_CREATION_REPL_FAILURE:"Submission for a project could not be created",PROJECT_PERMALINK_FAILED:"Failed to load a student project perma-link.",AUTOGRADER_STARTED:"Autograder started running tests",INVITE_MEMBERS_FROM_CSV:"Invited team members using CSV file upload",INVITE_MEMBERS_FROM_CSV_INVALID:"Invalid CSV file uploaded",TEAMS_HELP_RESOURCES_DISMISSED:"Help resources dimissed on Teams for Edu dashboard",TEAMS_ADMIN_STUDENT_MULTIPLAYER:"Admin joined project multiplayer with a student",TEAMS_WHOS_CODING_ADMIN_CLICK:"Admin clicks on student card",TEAMS_FREE_TRIAL_FLOW_BEGIN:"User begins teams free trial flow",TEAMS_FREE_TRIAL_FLOW_SUCCESS:"User successfully completes teams free trial flow",TEAMS_FREE_TRIAL_FLOW_DROPOFF:"Users drops off teams free trial flow",TEAMS_FOR_EDUCATION_LAUNCH_MODAL_OPEN:"User viewed launch announcement modal",TEAMS_FOR_EDUCATION_LAUNCH_MODAL_CLICK_PH:"User viewed PH for launch",TEAMS_FOR_EDUCATION_MARKETING_PAGE_VISITED:"Teams for Education marketing page visited",LANGUAGE_PAGE_VISITED:"Language page visited",LANGUAGE_PAGE_LANGUAGE_SWITCHED:"Language page language switched",LANGUAGE_PAGE_SIGNUP:"Language page signup",LANGUAGE_PAGE_LOGIN:"Language page login",LANGUAGE_PAGE_SIGNUP_PROMPT:"Language page signup prompt",LANGUAGE_PAGE_JOBCTA_CLICKED:"Language page job CTA clicked",HEADER_COMMAND_BAR_FOCUSED:"Header command bar focused",HEADER_COMMAND_BAR_NEW_REPL_SELECTED:"Header command bar new repl selected",HEADER_COMMAND_BAR_REPL_SELECTED:"Header command bar repl selected",EDIT_REQUEST_BUTTON_CLICKED:"Edit request button clicked",EDIT_REQUEST_DENIED:"Edit request denied",EDIT_REQUEST_ACCEPTED:"Edit request accepted",REPL_GUEST_VIEW:"Repl guest view",REPL_FORKED:"Repl forked",RUN_BUTTON_CLICKED:"Run button clicked",EDU_CHANGELOG_OPENED:"Replit education changelog opened",SOCIAL_VIEW_VIEW_CHANGED_VIEW_TOGGLE:"Social view changed view toogle",SOCIAL_VIEW_FORK_MODIFIED:"Social view fork modified",REPL_COMMENT_CREATED:"Repl comment created",REPL_REACTION_TOGGLED:"Repl reaction toggled",ALWAYS_ON_TOGGLED:"Always-On toggled",REPL_UNIT_TEST_CREATED:"Repl unit test created",REPL_UNIT_TEST_RUN:"Repl unit test run",REPL_UNIT_TEST_EDITED:"Repl unit test edited",REPL_UNIT_TEST_CONSTRUCTION_ERROR_INTERNAL:"Repl unit test internal construction error",ONBOARDING_SIMPLIFY_VARIATION:"Onboarding Simplify Variation",REPL_VIEWER_RENDERED:"Repl viewer rendered",DRAW_CTA_DISMISSED:"Draw cta dismissed",DRAW_CTA_TRIED:"Draw cta tried",VNC_OPENED:"VNC opened",VNC_CONNECTED:"VNC connected",VNC_AUDIO_ENABLED:"VNC audio enabled",ADD_GUEST_POPOVER_DISMISSED:"Add guest popover dismissed",HEADER_RENDERED_FOR_ANON:"Header rendered for anon",HEADER_RENDERED_FOR_ANON_2:"Header rendered for anon 2",ENV_EDITOR_OPENED:"Env editor opened",ENV_EDITOR_SECRET_ADDED:"Env editor key ",ENV_EDITOR_SECRET_UPDATED:"Env editor secret updated",ENV_EDITOR_SECRET_DELETED:"Env editor secret deleted",ENV_EDITOR_INTRO_SKIPPED:"Env editor tour skipped",ENV_EDITOR_INSERT_USED:"Env editor inserter used",MULTIPLE_MUTATION_OPS:"Multiple mutation ops"},_=Object.values(t).reduce((function(e,E){return"string"===typeof E&&(e[E]=!0),e}),{});e.exports={events:t,eventValuesHash:_}},zgDP:function(e,E,t){var _=t("oI91");function r(e,E){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);E&&(_=_.filter((function(E){return Object.getOwnPropertyDescriptor(e,E).enumerable}))),t.push.apply(t,_)}return t}function o(e){for(var E=1;E<arguments.length;E++){var t=null!=arguments[E]?arguments[E]:{};E%2?r(Object(t),!0).forEach((function(E){_(e,E,t[E])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(E){Object.defineProperty(e,E,Object.getOwnPropertyDescriptor(t,E))}))}return e}var n,i=t("Zui2"),T=t("yrdD"),a=T.events,s=T.eventValuesHash,I=Date.now().toString().slice(0,-3);function S(e){if(!n)return e;for(var E in n)e[E]=n[E];return e}var d={},O=function(e,E){var t=new Error,_=function(E){throw t.message="".concat(E," -- event: ").concat(e),t};i((function(){var t=window.analytics;c(t,e,_);var r=E||{};S(r),t.track(e,r,{context:{ip:window.CLIENT_IP,release:"aef0603"},integrations:{Amplitude:{session_id:I}}})}))},c=function(e,E,t){R(e),E&&"string"===typeof E||t("[SEGMENT TRACK] eventName is empty"),s[E]||t("[SEGMENT TRACK] event does not exist")},l=function(e,E){if(R(e),!E)throw new Error("[SEGMENT IDENTIFY] traits are empty");if(!E.id)throw new Error("[SEGMENT IDENTIFY] user id is empty")},R=function(e){return!e&&console.error("[SEGMENT PAGE] segment isn't loaded")};e.exports={track:O,trackOnce:function(e,E){var t=e+JSON.stringify(E);d[t]||(d[t]=!0,O(e,E))},trackLink:function(e,E,t){var _=new Error,r=function(e){throw _.message="".concat(e," -- event: ").concat(E),_};i((function(){var _=window.analytics;c(_,E,r),t?_.trackLink(e,E,o(o({},t),{context:{ip:window.CLIENT_IP,release:"aef0603"},integrations:{Amplitude:{session_id:I}}})):_.trackLink(e,E,{context:{ip:window.CLIENT_IP,release:"aef0603"},integrations:{Amplitude:{session_id:I}}})}))},page:function(e){var E=e.pageName,t=e.sourcePage;i((function(){var e=window.analytics;R(e),e.page(E.replace(/\//g,""),{sourcePage:t},{context:{ip:window.CLIENT_IP,release:"aef0603"},integrations:{Amplitude:{session_id:I}}})}))},identify:function(e){i((function(){var E=window.analytics;l(E,e);var t=e.id;delete e.id,e.gating&&(n={},e.gating.forEach((function(e){var E=e.controlName,t=e.value;n["gate_".concat(E.replace(/-/g,"_"))]=t})),delete e.gating,S(e)),E.identify(t,e,{context:{ip:window.CLIENT_IP,release:"aef0603"},integrations:{Amplitude:{session_id:I}}})}))},getAnonymousId:function(){var e=window.analytics;return R(e),window.analytics.user&&"function"===typeof window.analytics.user&&window.analytics.user().anonymousId()},events:a}}}]);