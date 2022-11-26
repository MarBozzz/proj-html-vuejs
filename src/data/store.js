
import { reactive } from "vue";

export const store = reactive({
  tools : [
    {
      icon : '<i class="fa-solid fa-paper-plane"></i>',
      name : 'Speed Optimization',
      use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
    },
    {
      icon : '<i class="fa-solid fa-cloud"></i>',
      name : 'Cloud Solutions',
      use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
    },
    {
      icon : '<i class="fa-solid fa-tablet-screen-button"></i>',
      name : 'Website Design',
      use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
    },
    {
      icon : '<i class="fa-solid fa-stopwatch"></i>',
      name : 'Online Marketing',
      use : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea quas unde aperiam...'
    },
  ]
})