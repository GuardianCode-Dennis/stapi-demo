<script lang="ts">
    import { onMount } from 'svelte';
    import axios from 'axios';

    let posts: any = [];
    let error = null

    onMount(async () => {
        try {
            const res = await axios.get('http://localhost:1337/api/posts?sort[0]=id:DESC');
            posts = res.data.data;
        } catch (e) {
            error = e
        }
    });
</script>

<h1 class="text-3xl pt-8 px-4">Mijn posts</h1>

{#if posts}
    {#each posts as post}
        <article class="my-2 border-b-2 border-gray-200 last-of-type:border-b-0 py-8 px-4">
            <h1 class="text-xl mb-4">{post.attributes.title}</h1>
            <div>
                {@html post.attributes.content}
            </div>
        </article>
    {/each}
{/if}
