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

This feature is connects to the AskNicely API, by using [Axios](https://axios-http.com/docs/intro). After getting the response from the API, the `'NotificationDashboard'` component that will loop through the array of `Notifications` and render a `'SingleNotification'` component. This displays the author of the notification, type, read/unread identifier and when the notification was created.

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

## Personal Reflections/Notes

This as my first time using typescript and using the Vue.js composition API. Previously, I was using the data model for Vue. This mean that I went slower than I usually would have since I pushed myself to learn something new. I didn't get to create as much tests as I wanted but I wanted to at least have one in for the service method. Ideally, I would've made tests for the components and service methods.

Getting the functionality working was quite easy for be but I ended up spending too much time on styling, which ended up giving me less time to do tests. I should've gotten the functionality working, written tests and completed styling after.

The Create to do task to make the POST API call was a bit tricky. Initally, I was getting a CORS error and was not getting any response back. Then I added a header for the content-type and that resulted in getting a 400 as a response. Im not sure if my header was wrong or whether there was something wrong in the request body. Regardless, I added a cause to handle the API error.

## Proposed improvements, solutions and features

- Mobile responsiveness
- Ensure that this feature is useable in other parts of the app, either as a notifications dropdown or a widget on a page
- Create more unit tests for the following features
  > - `'CREATE_TODO'` test
  > - Read vs Unread status checking
  > - Test that will check what will happen when data from the notification is missing eg. author, title
  > - Test that checks that the `'Toast'` errors are showing when an API error occurs
- Instead of clicking the notification to `'CREATE_TODO'` it would be nice to have an options button on the side of the notification that will show all `'available_actions'` for that notification
- Filter to only show unread notifications
- A button/toggle that will make all of the notifications 'read'
- Unread notifications counter at the top
- If it is a notifications page, then having filters for types of notifications would be good to have
- A preview of the text then a button to show the full text
