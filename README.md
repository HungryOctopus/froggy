# FROGGY

Our application is divided between a client-side ReactJS application and a server-side Node.js application.

## Server-side

### Models

### Controllers (REST API endpoints)

| METHOD | PATH | DESCRIPTION |
| GET | /statistics | Render personal statistics about volunteer activity |
| GET | /global-statistics | Render statistics about all volunteer activity |
| POST | /catch | Adds new volunteer activity (catch of the day) |
| GET | /calender | Renders calender |
| POST | /calender/:id | Add entry in the calender |
| PUT | /calender/:id | Edit entry in the calender |
| DELETE | /calender/:id | Delete entry in the calender |
| POST | /authentication/sign-up | Sign Up |
| POST | /authentication/sign-in | Sign In |
| DELETE | /authentication/sign-out | Sign Out |
| GET | /settings | Get settings for current account (e-mail) |

## Client-side

### Views

| NAME | DESCRIPTION |
| Home | ?? - to be decided |
| SignUp | Show sign up form
| SignIn | Show sign in form
| Settings | Allow viewers to change account settings (username, e-mail, password) |
| Catch | Shows form to fill in infos about the catch of the day (how many frogs, how many toads...) |
| PersonalStatistics | Shows statistics about the user's volunteer activity (for volunteer and organizer)
-> statistics per day / per week / since the beginning of the season / of all times |
| GlobalStatistics | Shows statistics about all volunteer activities |
-> statistics per day / per week / since the beginning of the season / of all times |
| Calender | Displays calender |
| Calender entry | Shows form for volunteers to register in the calender |
| Calender editing | Update or delete an entry |

## WHISHLIST

- General info (static)
- instant notification
- google maps
- social media (post your score on Facebook / Twitter)
- picture gallery

## OPEN QUESTIONS

- mobile first?
- what should be displayed in the home view? General info if not authenticated and general info + personal statistics if authenticated? Same sign-up for volunteer and organizer?
- how to block people that register as an organizer but are not organizers?
- do we need the organizer profile? What should an organizer do that the volunteer can't?
- should volunteers be able to see the profile of others?
