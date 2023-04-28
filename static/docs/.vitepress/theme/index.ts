import DefaultTheme from 'vitepress/theme'
import CustomLayout from '../components/CustomLayout.vue'
import 'uno.css'

export default {
  Layout: CustomLayout,
  NotFound: DefaultTheme.NotFound
}
