# My project journey

## I'll use this jornal to comment on the project and when I find something difficult, note it down.

## 22 Fev - Problem: Implementing async.waterfall in controller methods
I wanted to get the information about each Hoot(tweet), to display it. The idea was make one GET request to get all the hoots(tweets) from all users they follow.
    
So the pipeline for the controller method was:

```mermaid
graph TD
    A[GET request with user :id] --> B(queryById in DB)
	B --> C(return Array of all following profiles)
	C --> D(query to get all hoots with owner's ID in Array)
	D --> E(create new Array to add new fields in hoots -> virtual_date and avatar link)
	E --> F(Response with Object containing all fields)
```

The database structure:

```mermaid
classDiagram
	class User{
		id
		username
		avatar_link
		follows
	}
	class Hoot{
		id
		owner_id
		content
	}
```

I needed to use the current user name and avatar, so in the controller method, inside the function to create a new list, I made a query to get the list

avatar link. The problem was that this query was inside a for loop, which would finish after the function, so the result would be empty. I tried to use

async methods as waterfall but didn't work.

So, as we can see, my database has no relationship. Thats why I decided to refactor my database structure, and try another approach to the problem.

I'm not gonna just link the two collection. I'm going to create a Hoot article inside Users:

```mermaid
classDiagram
	class User{
		id
		username
		avatar_link
		follows
		hoots Array
	}
```