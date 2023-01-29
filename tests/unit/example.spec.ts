import { shallowMount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'SEO Checklist'
    const wrapper = shallowMount(TodoList, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
