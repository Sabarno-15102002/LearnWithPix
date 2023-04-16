const newStory = require('../models/story');
const cloudinary = require('../utils/cloudinary');
// exports.StoryUpload = async(req,res,next) => {
//     try{
//         let filesArray = [];
//         req.files.forEach(element => {
//             const file = {
//                 fileName: element.originalname,
//                 filePath: element.path,
//                 fileType: element.mimetype,
//                 fileSize: fileSizeFormatter(element.size, 2)
//             }
//             filesArray.push(file);
//         });
//         const story = new newStory({
//             title: req.body.title,
//             files: filesArray 
//         });
//         await story.save();
//         res.status(201).send('Files Uploaded Successfully');
//     }catch(error) {
//         res.status(400).send(error.message);
//     }
// }

// exports.getStory = async (req, res, next) => {
//     try{
//         const files = await newStory.find();
//         res.status(200).send(files);
//     }catch(error) {
//         res.status(400).send(error.message);
//     }
// }

exports.StoryUpload = async (req, res, next) => {
    try {

        let sections = [...req.body.sentenceSections];
        let resourceArray = [];

        for (let i = 0; i < sections.length; i++) {
            const imageResult = await cloudinary.uploader.upload(sections[i]?.image?.content, {
                folder: req.body.title,
                width: 1920,
                crop: "scale"
            });

            const audioResult = await cloudinary.uploader.upload(sections[i]?.audio?.content, {
                folder: req.body.title,
                transformation:[{audio_codec:"mp3"}],
                resource_type: "video"
            });

            const newSection = {
                sentenceid: `${i+1}`,
                section:{
                    sentence: sections[i]?.sentence,
                    image: {
                        public_id: imageResult.public_id,
                        url: imageResult.secure_url
                    },
                    audio: {
                        public_id: audioResult.public_id,
                        url: audioResult.secure_url
                    }
                }
            };

            resourceArray.push(newSection);

        }
        
        // const story = await newStory.create(req.body)
        const story = await newStory({
            title: req.body.title,
            sections: [...resourceArray]
        });

        console.log(story);
        await story.save();
        res.status(201).json({
            success: true,
            story
        })

    } catch (error) {
        console.log(error);
        next(error);

    }
}

exports.getStory = async (req, res, next) => {
    try {
        const story = await newStory.find()

        res.status(201).json({
            success: true,
            story,
        })

    } catch (error) {
        console.log(error);
        next(error);
    }
}