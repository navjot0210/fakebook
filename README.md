# Fakebook App

The Fakebook app is an application that allows users to post messages, photos, or both. 
Additionally, the app features a modal that displays user information.

### Features

- Posting Functionality: Users can create posts containing text messages, photos, or a combination 
of both.

- User Info Modal: A modal window displays detailed user information upon activation.

### Components
1. Posting Section:
- Users can compose posts with text messages and/or upload photos.
- Includes a 'Post' button to submit posts
2. Post Display Section:
- Shows a feed of posts created by users.
- Each post includes a header with the user's profile picture, full name, and post date.
3. User Info Modal:
- Activated to display detailed user information.
- Shows user's profile picture, full name, username, email, associated groups, and pages, along with 
their monetization status.

### Technical Details

#### Classes

Implements User and Subscriber classes.
1. User class contains basic user information: id, name, username, and email.
```JavaScript
class User {
  #id;
  #name;
  #userName;
  #email;

  constructor(id, name, userName, email) {
    this.#id = id;
    this.#name = name;
    this.#userName = userName;
    this.#email = email;
  }

  get id() { return this.#id; }
  get name() { return this.#name; }
  get userName() { return this.#userName; }
  get email() { return this.#email; }

  getInfo() {
    return `${this.#id}  ${this.#name}  ${this.#userName} ${this.#email}`;
  }
}
```

2. Subscriber class extends User and adds additional properties: pages, groups, and monetization 
status.
```JavaScript
class Subscriber extends User {
  #pages;
  #groups;
  #canMonetize;

  constructor(id, name, userName, email, pages, groups, canMonetize) {
    super(id, name, userName, email);
    this.#pages = pages;
    this.#groups = groups;
    this.#canMonetize = true;
  }

  get pages() { return this.#pages; }
  get groups() { return this.#groups; }
  get canMonetize() { return this.#canMonetize; }

  getInfo() {
    return `${super.getInfo()} ${this.#pages} ${this.#groups}`;
  }
}
```

#### Form for User-Input

A basic form including a text-area and option to select images to be posted.
```HTML
<form class="posts-input">
  <textarea placeholder="Any thoughts to share?"></textarea>
    <div class="flex space-between">
      <div class="flex">
        <label for="file-input">
          <i class="fa-solid fa-image"></i>
        </label>
        <input type="file" id="file-input" accept="image/*" class="post-image">
        <p class="file-detail"></p>
      </div>
      <div>
        <input type="button" value="Post">
      </div>
    </div>
</form>
```

### How to Use
- Posting Content

1. Enter text messages in the designated textarea.
2. Upload photos using the provided file input.
3. Click the 'Post' button to submit the post.

- Viewing User Info:

1. Click on the user's profile picture or name to activate the user info modal.
2. The modal displays detailed information about the user's account.

### Contributions
Worked with [Joseph Adoga](https://github.com/josephadoga) on this interesting project.

## Demo
Click [here]() to test the application.