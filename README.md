# isso-frontend

## Goals

- Use modern technology (React.js, TypeScript) without worrying about bloat or package count
- Use dependencies rather than reimplementing them manually
- Write cleaner CSS from scratch
- Solve some issues:
  - Fetch i18n in separate request instead of bundling all languages together
  - Improve overall DOM structure
  - More organized updating of elements using React
- Add some features:
  - Allow admin/moderation from comment section page (instead of just the admin panel)
  - Use new `/config` endpoint for config -- remove client-side config

## Structure

- `#isso-root` - root DOM element
  - Isso - app component
    - Postbox
    - Thread - `#isso-thread` entire comment thread - would have multiple of Comment
      - Comment
      - ...

- Postbox - `.isso-postbox` - form to create top-level comments
  - `div.isso-textarea-wrapper` - comment text input container
    - `textarea.isso-textarea` - the actual text input (markdown)
    - `div.isso-preview` - hidden by default - shown when preview button is pressed
  - `div.isso-postbox-bottom` - contains author info boxes and preview/submit buttons
    - `div.isso-input-wrapper` - (user)name (optional)
    - `div.isso-input-wrapper` - email address (optional)
    - `div.isso-input-wrapper` - website (optional)
    - `div.isso-post-action` - preview button, or edit button if previewing (toggles between those two buttons)
    - `div.isso-post-action` - submit button
  - `div.isso-notification-section` - container for email notifications checkbox - hidden if no email provided
    - `input` - "Subscribe to email notification of replies" (translated using react-i18next)

- Comment - `#isso-[x]` where `[x]` is the comment ID - a comment
  - Avatar - `div.isso-avatar` - author avatar container
    - `svg` - profile picture generated from hash of email address
  - `div.isso-text-wrapper` - should be full size of comment (use padding) - so background can be set for highlighting purposes
    - `div.isso-comment-header` - information about comment
      - `span.isso-author` - author name - text nested inside `<a>` if author has website
      - `span.isso-page-author-suffix` - (optional) shows if the commenter is the article author
      - `a.isso-permalink` - links to `#isso-[x]`
        - `time` - show relative date since the comment was created
      - `span.isso-note` - `float: right` text that says if a comment is in moderation
    - `div.isso-text` - container for the rendered markdown received from API
    - `div.isso-comment-footer` - contains buttons
      - `div.isso-voting` - container for voting-related buttons -- hidden if config disables voting
        - `span.isso-votes` - show upvote/downvote sum
        - `a.isso-upvote` - upvote button
        - `a.isso-downvote` - downvote button
      - `a.isso-reply` - reply button
      - `a.isso-edit` - edit button (excluded if not allowed)
      - `a.isso-delete` - delete button (excluded if not allowed)
    - `div.isso-follow-up` - container for replies (excluded if there are none)
      - Comment
      - ...


<details>
  <summary>API response (<code>/config</code>)</summary>

  ```json
  {
    "config": {
      "reply-to-self": true,
      "require-email": false,
      "require-author": false,
      "reply-notifications": true,
      "gravatar": false
    }
  }
  ```

</details>

<details>
  <summary>API response (<code>/?uri=/some-article/&limit=10&nested_limit=5</code>)</summary>

  ```json
  {
    "id": null,
    "total_replies": 4,
    "hidden_replies": 0,
    "replies": [
      {
        "id": 16,
        "parent": null,
        "created": 1652636130.890841,
        "modified": null,
        "mode": 1,
        "text": "<p>There's a new game you can get by first doing s/e/x and then s/w/ord\nI've also published the source code on GitHub at rebane2001/txnor-server</p>",
        "author": "Rebane",
        "website": null,
        "likes": 0,
        "dislikes": 0,
        "notification": 1,
        "hash": "84c26eb65b47",
        "total_replies": 3,
        "hidden_replies": 0,
        "replies": [
          {
            "id": 17,
            "parent": 16,
            "created": 1652660917.5989892,
            "modified": null,
            "mode": 1,
            "text": "<p>Thanks for letting me know! I looked at the source and I'm wondering about a couple things:</p>\n\n<ul>\n<li>Why is <code>Intel Mac OS X 11.6; rv:92.0</code> included in the Discord user agent regex?</li>\n<li>Is the 6969th user meant to trigger on a 1/6970 chance? <a href=\"https://docs.python.org/3/library/random.html#random.randint\" rel=\"nofollow noopener\"><code>random.randint</code> is inclusive</a>, and you put <code>random.randint(0, 6969)</code>, which if I understand correct would mean that it has 6970 numbers to pick from.</li>\n<li>Has something in the user agent logic changed? I can't seem to get the raw image anymore by setting my user agent to \"Discord\". But it still works fine on Discord.</li>\n</ul>\n\n<p>I also updated the post based on the things I discovered in the source code.</p>",
            "author": "bbaovanc",
            "website": "https://bbaovanc.com",
            "likes": 0,
            "dislikes": 0,
            "notification": 1,
            "hash": "284513e38f5c"
          },
          {
            "id": 18,
            "parent": 16,
            "created": 1652685454.7172008,
            "modified": null,
            "mode": 1,
            "text": "<p>Thanks for updating the article, it's a really great writeup of the 'hack'!</p>\n\n<ol>\n<li>This is the User-Agent Discord uses even more often than the Discordbot one, so you need it for this thing to work.</li>\n<li>Of course it is intentional, as a professional programmer I never make off-by-one mistakes :). I believe what happened was I first tested locally using random.randint(0,1) == 1, and later on forgot about the zero when I changed it to 6969.</li>\n<li>I've added some additional non-UA safety measures to limit abuse and DoS attack surface.</li>\n</ol>\n\n<p>Also, there's a third ending to the s/w/ord game you haven't found yet :)</p>",
            "author": "Rebane",
            "website": "",
            "likes": 0,
            "dislikes": 0,
            "notification": 1,
            "hash": "84c26eb65b47"
          },
          {
            "id": 22,
            "parent": 16,
            "created": 1653183677.6450179,
            "modified": null,
            "mode": 1,
            "text": "<p>A little bit ago a friend sent me  your video and I watched the math challenge section. I didn't realize that Discord's CDN would actually respect your <code>Cache-Control</code> header, causing it to be different for everyone. I <a href=\"https://github.com/BBaoVanC/bbaovanc.com/commit/7a529fb1ac0e659414b809cc44a4e31d09305d5c\" rel=\"nofollow noopener\">updated the post</a> to add that, and a link to your video.</p>",
            "author": "bbaovanc",
            "website": "https://bbaovanc.com",
            "likes": 0,
            "dislikes": 0,
            "notification": 1,
            "hash": "284513e38f5c"
          }
        ]
      },
      {
        "id": 19,
        "parent": null,
        "created": 1652687758.2464504,
        "modified": null,
        "mode": 1,
        "text": "<p>Oh btw, I didn't realize your comments section renders <em>markdown</em>, so my newlines look messed up. Would be great if it said so somewhere, or even provided a simple live-preview without clicking the <em>Preview</em> button.</p>",
        "author": "Rebane",
        "website": null,
        "likes": 0,
        "dislikes": 0,
        "notification": 1,
        "hash": "84c26eb65b47",
        "total_replies": 1,
        "hidden_replies": 0,
        "replies": [
          {
            "id": 20,
            "parent": 19,
            "created": 1652712139.2870646,
            "modified": null,
            "mode": 1,
            "text": "<p>Yep, that's sort of in my TODO list for the comment system. <del>I would edit your message to fix the newlines but also the editing in the admin page is a bit broken as well. I'll hopefully figure something out soon.</del></p>\n\n<p>Nevermind, I misremembered it. Editing on the admin page works fine, so I've fixed it. The issues are when editing from the client side.</p>",
            "author": "bbaovanc",
            "website": "https://bbaovanc.com",
            "likes": 0,
            "dislikes": 0,
            "notification": 1,
            "hash": "284513e38f5c"
          }
        ]
      },
      {
        "id": 21,
        "parent": null,
        "created": 1653183443.2913928,
        "modified": null,
        "mode": 1,
        "text": "<p><a href=\"https://txnor.com/\" rel=\"nofollow noopener\">https://txnor.com/</a> redirects to the explanation video not a tweet</p>",
        "author": "dn",
        "website": "",
        "likes": 0,
        "dislikes": 0,
        "notification": 0,
        "hash": "25c712212044",
        "total_replies": 2,
        "hidden_replies": 0,
        "replies": [
          {
            "id": 23,
            "parent": 21,
            "created": 1653184997.2971416,
            "modified": 1653185045.0740285,
            "mode": 1,
            "text": "<p><a href=\"https://github.com/BBaoVanC/bbaovanc.com/commit/7d5309862e502b8e4e1befa8073fa8b2e9dc6536\" rel=\"nofollow noopener\">Fixed</a></p>",
            "author": "bbaovanc",
            "website": "https://bbaovanc.com",
            "likes": 0,
            "dislikes": 0,
            "notification": 1,
            "hash": "284513e38f5c"
          },
          {
            "id": 24,
            "parent": 21,
            "created": 1653185169.9862838,
            "modified": null,
            "mode": 1,
            "text": "<p>cool bestie</p>",
            "author": "dn",
            "website": "",
            "likes": 0,
            "dislikes": 0,
            "notification": 0,
            "hash": "25c712212044"
          }
        ]
      },
      {
        "id": 25,
        "parent": null,
        "created": 1653534472.0076623,
        "modified": null,
        "mode": 1,
        "text": "<p>btw there's a 3rd ending (im sure you already know cuz rebane said so) you can get it by defending and hugging</p>",
        "author": "idk",
        "website": null,
        "likes": 0,
        "dislikes": 0,
        "notification": 1,
        "hash": "77972121105e",
        "total_replies": 0,
        "hidden_replies": 0,
        "replies": []
      }
    ],
    "config": {
      "reply-to-self": true,
      "require-email": false,
      "require-author": false,
      "reply-notifications": true,
      "gravatar": false
    }
  }
  ```

</details>
