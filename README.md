# FROGGY

Our application is divided between a client-side ReactJS application and a server-side Node.js application.

## Server-side

### Models

- User

  - name
  - email
  - passwordHashAndSalt
  - role: volunteer or admin

- frog counter
- Notification
- Admin
- Calender (?)
- Message dashboard: this will be the message model that the Admin POSTs messages to. We will then GET these messages and display them in volunteer user profile

### Controllers (REST API endpoints)

| METHOD | PATH | DESCRIPTION | AUTHENTICATION
| GET | /statistics | Render personal statistics about volunteer activity | authenticated |
| GET | /global-statistics | Render statistics about all volunteer activity | all |
| POST | /catch | Adds new volunteer activity (catch of the day) | authenticated |
| GET | /calender | Renders calender | authenticated |
| POST | /calender/:id | Add entry in the calender | authenticated |
| PUT | /calender/:id | Edit entry in the calender | authenticated |
| DELETE | /calender/:id | Delete entry in the calender | authenticated |
| POST | /authentication/sign-up | Sign Up | all |
| POST | /authentication/sign-in | Sign In | all |
| DELETE | /authentication/sign-out | Sign Out | authenticated |
| GET | /settings | Get settings for current account (e-mail) | authenticated |

## Client-side

### Views

| NAME | DESCRIPTION |
| Home | ?? - to be decided | Event location google maps
| SignUp | Show sign up form + User google maps pin
| SignIn | Show sign in form
| Settings | Allow viewers to change account settings (username, e-mail, password) |
| FrogCounter | Shows form to fill in the collected frogs & toads |
| PersonalStatistics | Shows statistics about the user's volunteer activity (for volunteer and organizer)
-> statistics per day / per week / since the beginning of the season / of all times + gamification |
| GlobalStatistics | Shows statistics about all volunteer activities | Google maps all users
-> statistics per day / per week / since the beginning of the season / of all times |
| Calender | Displays calender |
| Calender entry | Shows form for volunteers to register in the calender |
| Calender editing | Update or delete an entry |

- instant notification / npm package ?

> Google maps api
> Home -> Event location pinned
> Statistics -> All user pins
> Sign-up -> Set user pin

## WHISHLIST

- General info (static)

- social media (post your score on Facebook / Twitter)
- picture gallery
- gamification / trophy

## OPEN QUESTIONS

- what should be displayed in the home view? General info if not authenticated and general info + personal statistics if authenticated? Same sign-up for volunteer and organizer?
- how to block people that register as an organizer but are not organizers? => create it in the API directly
- do we need the organizer profile? What should an organizer do that the volunteer can't? => no organizer profile
- should volunteers be able to see the profile of others? => no

## DESIGN

- mobile first

## TODO'S

Jamie ==> notifications / admin model
Gregor ==> calender
Amélie ==> statistics / push to heroku & netlify
