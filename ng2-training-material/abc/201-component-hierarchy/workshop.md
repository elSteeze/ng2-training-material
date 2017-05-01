# Workshop for this step

Goals:

* Move the functionality (very little so far) in to a route.
* Split the static HTML in to smaller components.

-----

1. Use the Angular CLI to generate components. Split the app component
   template between them (as noted in comments in the HTML). For
   example, your commands may look something like this:

```
ng generate component videoList
ng generate component videoViewer
ng generate component statFilters
ng generate component statGraphs
```

2. Add a dashboard dashboard component

```
ng generate component dashboard
```

3. Set up routing

If you follow the directions to use the `--routing` option while
creating your application (or used our Cloud 91 step script), your
application will already have a basic routing set up. If not, you can
follow the example in an earlier step to add that.

Then, add a route for the dashboard component.

4. Assemble your static application

Use the components you generated in step 1 to reconstruct the video
stat tracker app in the dashboard component. As you begin of course,
the components will be mostly placeholders without actual
functionality.
