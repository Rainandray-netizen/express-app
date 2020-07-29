const Opinion = require('../models/opinions.model')

const index = (req, res) => {
  Opinion.find({}, (err, allOpinions)=>{
    res.render('opinions/index', {posts: allOpinions})
  })
}

const show = (req, res) => {
  Opinion.findOne({_id: req.params.id }, (err, opinion)=>{
    res.render(`opinions/show`, {opinion})
  })
}

const newPost = (req, res) => {
  res.render('opinions/new')
}

const createPost = async (req, res) => {
  opinion =await new Opinion({
    content: req.body.content,
    timestamp: new Date(),
  })
  await opinion.save()
  res.redirect('opinions/')
}

const createComment = async (req, res) => {
  const comment = {
    content: req.body.content,
    timestamp: new Date()
  }
  await Opinion.findById(req.params.id, async (err, opinion)=>{
    opinion.comments.push(comment)
    await opinion.save()
  })
  res.redirect(`/opinions/${req.params.id}`)
}

const deleteOne = async (req, res) => {
  await Opinion.findByIdAndDelete(req.params.id, (err, opinion)=>{
    console.log('deleting post with id ', req.params.id)
  })
  res.redirect('/opinions')
}

const deleteComment = async (req, res) => {
  opinion = await Opinion.findById(req.params.id)
  comments = await opinion.comments
  await comments.pull({_id:req.params.commentid})
  await opinion.save()
  res.redirect(`/opinions/${req.params.id}`)
}

module.exports = {
  index,
  new: newPost,
  createPost,
  show,
  createComment,
  delete:deleteOne,
  deleteComment
}