<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { NotificationModel } from '@/models/notification-model'
defineProps({
  notification: {
    type: Object as PropType<NotificationModel>
  }
})
</script>

<template>
  <div class="text-white p-4 flex border-b-2 border-b-white/[.1]">
    <div class="w-auto p-2">
      {{ notification.read }}
    </div>
    <div class="w-full p-2 flex flex-wrap">
      <div class="w-full">
        <h1 class="pb-4">
          {{ notification.title }}
        </h1>
        <p class="pb-4">
          {{ notification.preview_text }}
        </p>
      </div>
      <div class="w-full flex justify-between uppercase">
        <p class="text-name-time-label">
          {{ notification.author }}
        </p>
        <p class="text-name-time-label">
          {{ notification.created }}
        </p>
      </div>
      <p>
        {{ notification.available_actions }}
      </p>
    </div>
  </div>
</template>
