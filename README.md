# ask-nicely-test

First iteration of using AskNicely's mock notifications API to display a notification dashboard, that include status symbols that signify whether it has been read or not, author name and initials, type of notification and when the notification was posted.

This was implemented using Typescript, TailwindCss, Vite and Vitest

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/guide/)

```sh
npm run test:unit
```

### Run in your local environment [http://localhost:5173/](http://localhost:5173/)

# Explanation

This feature is connects to the AskNicely API, by using [Axios](https://axios-http.com/docs/intro). After getting the notifications from the API, the `'NotificationDashboard'` component that will loop through the '`NotificationsResponse'` and render a `'SingleNotification'` component for each notification. This component displays the author of the notification, type, read/unread identifier and when the notification was created.

Each notification also contains an array of `'available_actions'`. If the array contains `'CREATE_TODO'`, then the '`SingleNotification'` component becomes clickable and creates a `'CREATE_TODO'` post request to the AskNicely API which that includes the following as the body of the request.

```sh
{ id:  notification.id, action:  'TODO' }
```

Unfortunately I was not able to get this feature to work completely, and the post request ended up with an **Error 400**. My suspicion is that I am missing some information either with the body or the header of the request.

## Testing

Using [Vitest](https://vitest.dev/guide/) in conjunction with [Mock Service Worker](https://mswjs.io/docs/getting-started) I created a test that checks whether `'getNotifications'` API function is working correctly.

During testing, whenever the `'getNotifications'` function is run, the expected mock notification should look like the example below.

```sh
notificationResponse  = [
	{
		id:  'da89e554-3bdb-11ee-be56-0242ac120002',
		title:  'ALERT',
		preview_text: 'Etiam fermentum lectus vel convallis pretium. Aliquam sit amet faucibus ante, ut euismod justo. Sed arcu nulla, vehicula vel vulputate eget, tempus quis urna.',
		full_text: 'Etiam fermentum lectus vel convallis pretium. Aliquam sit amet faucibus ante, ut euismod justo. Sed arcu nulla, vehicula vel vulputate eget, tempus quis urna. Etiam fermentum lectus vel convallis pretium. Aliquam sit amet faucibus ante, ut euismod justo. Sed arcu nulla, vehicula vel vulputate eget, tempus quis urna. Etiam fermentum lectus vel convallis pretium. Aliquam sit amet faucibus ante, ut euismod justo. Sed arcu nulla, vehicula vel vulputate eget, tempus quis urna. Etiam fermentum lectus vel convallis pretium. Aliquam sit amet faucibus ante, ut euismod justo. Sed arcu nulla, vehicula vel vulputate eget, tempus quis urna.',
		author:  'Kaydence Kathleen',
		created:  '24 mins ago',
		read:  true,
		available_actions: ['IGNORE', 'CREATE_TODO', 'DELETE']
	}
]
```

## Proposed improvements, solutions and features

- Mobile responsiveness
- Ensure that this feature is useable in other parts of the app, either as a notifications dropdown or a widget on a page
- Create more unit tests for the following features
  -- `'CREATE_TODO'` test
  -- Read vs Unread status checking
  -- Test that will check what will happen when data from the notification is missing eg. author, title
  --Test that checks that the `'Toast'` errors are showing when an API error occurs
- Instead of clicking the notification to `'CREATE_TODO'` it would be nice to have an options button on the side of the notification that will show all `'available_actions'` for that notification
- Filter to only show unread notifications
- A button/toggle that will make all of the notifications 'read'
- Unread notifications counter at the top
- If it is a notifications page, then having filters for types of notifications would be good to have

## Personal Reflections/Notes

Since this was my first time using Typescript I ended up focusing on the feature making. I typically like to make tests as I create projects so I can continually check that the first features that I made don't break when new features are made. In this case unfortunately I was only able to create one test, because I wanted to reduce the context switching to be more efficient.

In a normal scenario instead of focusing on styling I would have focused more on the testing and then do the styling afterwards.
