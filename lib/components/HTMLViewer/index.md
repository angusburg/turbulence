# HTMLViewer
HTMLViewer is a standalone component, styling (dangerously set) inner HTML elements. This is intended to style markdown that would otherwise be plain HTML elements.

## Component
> HTMLViewer is a Backgroundable, Displayable, Paddable, and Sizable component.

| Prop Name               | Required?  | Type       | Description                        | Default |
| ----------------------- | ---------- | ---------- | ---------------------------------- | ------- |
| children                | No         | React.Node | Children to render.                | `null`  |
| dangerouslySetInnerHTML | No         | String     | HTML to render                     | `null`  |
| id                      | No         | String     | Element ID                         | `null`  |
| useHTMLAsIs             | No         | Boolean    | Prevent injecting HTML             | `false` |

## Default Behavior
`dangerouslySetInnerHTML` intentionally does not have an abstraction so you must use the entire `{__html: html}`.

HTMLViewer will inject additional wrapper divisions on HTML passed in `dangerouslySetInnerHTML` by default. Turn it off with the `useHTMLAsIs` prop.

## Example
```javascript
const html = '' // Some HTML
<HTMLViewer dangerouslySetInnerHTML={{__html: html}} />
```
