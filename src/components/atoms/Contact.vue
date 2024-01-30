<template>
  <div class="mt-12">
    <h6 class="mb-cst-8 font-medium uppercase leading-5 before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <table class="text-sm" width="100%">
      <tbody class="border-0">
        <tr 
          v-for="contact in contactList" 
          :key="contact.text.replace(/\s+/g, '')"
        >
          <td>
            <i :class="contact.icon" />
          </td>
          <td>{{ contact.text }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    
  <script setup lang="ts">
  import { type Contact } from '@/types/sidebar.props.types';
  defineProps<Contact>();
  </script>