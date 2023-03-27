<template>
  <div>
    <div v-mwlTextInputHighlightContainer>
      <textarea
        v-mwlTextInputElement
        class="form-control"
        v-model="text"
        ref="textarea"
        @input="addTags"
      ></textarea>
      <mwl-text-input-highlight
        :tags="tags"
        :tagCssClass="'bg-blue'"
        :textInputElement="$refs.textarea"
        @tagMouseEnter="addDarkClass($event.target)"
        @tagMouseLeave="removeDarkClass($event.target)"
        @tagClick="tagClicked = $event.tag"
      >
      </mwl-text-input-highlight>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const tags = ref([]);
    const text = ref('mail@qq.com');
    const tagClicked = ref();

    onMounted(() => {
      addTags();
    });

    return {
      tags,
      text,
      tagClicked,
      addTags,
      addDarkClass,
      removeDarkClass,
    };

    function addTags() {
      tags.value = [];
      const matchMentions =
        /([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6};*)+/g;

      let mention;
      debugger;
      while ((mention = matchMentions.exec(text.value))) {
        debugger;
        tags.value.push({
          indices: {
            start: mention.index,
            end: mention.index + mention[1].length,
          },
          data: mention[1],
        });
      }
    }

    function addDarkClass(elm) {
      if (elm.classList.contains('bg-blue')) {
        elm.classList.add('bg-blue-dark');
      } else if (elm.classList.contains('bg-pink')) {
        elm.classList.add('bg-pink-dark');
      }
    }

    function removeDarkClass(elm) {
      elm.classList.remove('bg-blue-dark');
      elm.classList.remove('bg-pink-dark');
    }
  },
});
</script>

<style>
.bg-blue {
  color: lightcoral;
}
.bg-pink {
  color: pink;
}
.bg-blue-dark {
  color: darkblue;
}
.bg-pink-dark {
  color: daarkpink;
}
</style>
