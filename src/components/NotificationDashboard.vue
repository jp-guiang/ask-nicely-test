<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNotifications } from '../services/notifications-api'
import type { NotificationModel } from '../models/notification-model'
import SingleNotification from '../components/SingleNotification.vue'

const notifications = ref<NotificationModel[]>([])

onMounted(async () => {
  notifications.value = await getNotifications()
})
</script>

<template>
  <div class="bg-gradient-to-b from-[#6b097a] to-[#274bdb]">
    <header class="text-white text-center text-2xl border-b-2 border-white p-4">
      <h1>Notifications</h1>
    </header>
    <SingleNotification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>
