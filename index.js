const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require ("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    {
        id: uuidv4(),
        username: "rajeev",
        content: "I am Learning JavaScript"
    },
    {
        id: uuidv4(),
        username: "shreyash",
        content: "I am Going to GYM"
    },
    {
        id: uuidv4(),
        username: "aryan",
        content: "I am Learning Soft Skills"
    },
    {
        id: uuidv4(),
        username: "vedant",
        content: "I am Practicing Aptitude"
    },
]

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4()
    posts.push({id, username, content})
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", {post});
})

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});