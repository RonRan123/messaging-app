var express = require('express');
var router = express.Router();
const db = require("./firebase");

router.get("/", function(req, res, next) {
    res.send("Messages API is working!");
});

router.get("/messages",  async (req, res) => {
    // return res.json({'name' : 'RonRan'})
    try {
        let query = await db.collection('messages').get();
        let response = []
        query.forEach((doc) => {
            response.push({doc_id: doc.id, ...doc.data()})
        })
        return res.status(200).json(response)
    }
    catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})

router.get('/message/:msg_id', async (req, res) => {
    try{
        const document = db.collection('messages').doc(req.params.msg_id);
        let msg = await document.get();
        let response = msg.data();
        return res.status(200).send(response);

    } catch(error){
        console.log(error);
        return res.status(500).send(error);
    }
})

// router.delete('/message/:msg_id', async (req, res) => {
//     try{
//         const res = await db.collection('messages').doc(req.params.msg_id).delete();
//         return res.status(204);
//     } catch(error){
//         console.log(error);
//         return res.status(500).send(error);
//     }
// })
router.post('/message', async(req, res) => {
    try{
        const ref = await db.collection('messages').add({
            username: req.body.username,
            createdAt: req.body.dateCreated,
            text: req.body.message 
        });
        console.log("Document written with ID: ", ref.id);
        return res.status(201).json({
            message: 'Post successful'
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

router.put('/message', async(req, res) => {
    try {
        const ref = db.collection('messages').doc(req.body.id)
        const update = await ref.update({text: req.body.message})

        return res.status(200).json({
            message: 'Message updated'
        })
    }
    catch {
        console.log(err)
        return res.status(500).send(err)
    }
})

router.delete('/message', async(req, res) => {
    try {
        //console.log(req.query)
        const ref = await db.collection('messages').doc(req.query.id).delete()
        return res.status(200).json({
            message: "Document deleted"
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})


module.exports = router;