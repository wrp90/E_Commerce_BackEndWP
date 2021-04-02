const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  // try {
  //   const newTag = await Tag.findByPk(req.params.body);
  //   res.status(200).json(newTag);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  // try {
  //   const updateTagName = await Tag.update(
  //     {
  //       tag_name: req.body.tag_name,
  //     },
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //     }
  //   );
  //   if (!updateTagName) {
  //     res.status(404).json({ message: 'There has been an error' });
  //     return;
  //   }
  //   res.status(200).json(updateTagName);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  // try {
  //   const deletedTag = await Tag.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });

  //   if (!deletedTag) {
  //     res.status(404).json({ message: 'There has been an error' });
  //     return;
  //   }

  //   res.status(200).json(deletedTag);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
