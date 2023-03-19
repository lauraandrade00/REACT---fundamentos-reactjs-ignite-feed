import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post  
        author="Laura Andrade" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quo illo dignissimos culpa perferendis exercitationem facilis ipsam assumenda incidunt sunt ducimus officiis excepturi laborum ut. Ut voluptates qui et accusamus?"
      />

      <Post 
        author="Paulo Ricardo"
        content="Um novo post muito legal"
      />
      <Post />
    </div>
  )
}
