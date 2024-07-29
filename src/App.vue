<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNotifications } from './services/notifications-api'
import type { NotificationModel } from './models/notification-model'
import SingleNotification from './components/SingleNotification.vue'

const notifications = ref<NotificationModel[]>([])

onMounted(async () => {
  notifications.value = await getNotifications()
})
</script>

<template>
  <main>
    <SingleNotification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    >
    </SingleNotification>
  </main>
</template>
