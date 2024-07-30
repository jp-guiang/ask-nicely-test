import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { HttpResponse, http } from 'msw'
import { notificationResponse } from './components/__tests__/mockNotifications'

export const restHandlers = [
  http.get('https://testau.asknice.ly/api/v1/candidate-test/mock-notifications', () => {
    return HttpResponse.json({ data: notificationResponse })
  })
]
const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
