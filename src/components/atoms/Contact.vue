<template>
  <div class="mt-12">
    <h6 class="mb-0.5 font-medium uppercase leading-5 before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <table class="text-sm" width="100%">
      <tbody class="border-0">
        <tr v-for="line in contactInformation" :key="line.text.replace(/\s+/g, '')">
          <td>
            <i :class="line.icon" />
          </td>
          <td>{{ line.text }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
  <script setup lang="ts">
  import { type Contact } from '@/types/props.types';
  defineProps<Contact>();
  </script>