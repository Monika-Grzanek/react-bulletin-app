const Post = require('./../models/post.model');

exports.getAllPosts = async (req, res) => {
    try {
      const result = await Post
        .find({status: 'Published'})
        .select('title photo description')
        .sort({updatedDate: -1});
      if(!result) res.status(404).json({ post: 'Not found' });
      else res.json(result);
    }
    catch(err) {
      res.status(500).json(err);
    }
  };

exports.getPostById = async (req, res) => {
    try {
      const result = await Post
        .findById(req.params._id);
      if(!result) res.status(404).json({ post: 'Not found' });
      else res.json(result);
    }
    catch(err) {
      res.status(500).json(err);
    }
}

exports.addNewPost =  async (req, res) => {
    try {
        const { title, description, location, author, contact } = req.fields;
        const file = req.files.file;
        const fileExt = file.path.split('.').slice(-1)[0];
    
        const titlePattern = new RegExp(/(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/, 'g');
        const titleMatched = title.match(titlePattern).join('');
    
        const descriptionPattern = new RegExp(/(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/, 'g');
        const descriptionMatched = description.match(descriptionPattern).join('');

        const locationPattern = new RegExp(/(<\s*(strong|em)*>(([A-z]|\s)*)<\s*\/\s*(strong|em)>)|(([A-z]|\s|\.)*)/, 'g');
        const locationMatched = location.match(locationPattern).join('');
    
        const authorPattern = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'g');
        const authorMatched = author.match(authorPattern).join('');

        const contactPattern = new RegExp(/^[0-9]*$/);
        const contactMatched = location.match(contactPattern).join('');
    
        if(title && author && description && location && contact && file && (fileExt === 'jpg' || fileExt === 'gif' || fileExt === 'png') && titleMatched.length === title.length && authorMatched.length === author.length && descriptionMatched.length === description.length && locationMatched.length === location.length && contactMatched.length === contact.length) { // if fields are not empty...
    
          const fileName = file.path.split('/').slice(-1)[0]; // cut only filename from full path, e.g. C:/test/abc.jpg -> abc.jpg
          const newPost = await new Post({ title, description, location, author, contact, src: fileName });
          await newPost.save();
          res.json(newPost);
          
        } else {
          throw new Error('Wrong input!');
        }
    } catch (err) {
      res.status(500).json(err);
    }
}

exports.editPost = async (req, res) => {
    const { title, description, location, author, contact } = req.fields;
    try {
      const editedPost = await Post.findById(req.params.id);
      if(editedPost) {
        await Post.updateOne({ _id: req.params.id }, { $set: {  title: title, description: description, location: location, author: author, contact: contact}});
        res.json({ message: 'OK' });
      }
      else res.status(404).json({ message: 'Not found...' });
    }
    catch(err) {
      res.status(500).json({ message: err });
    }
};