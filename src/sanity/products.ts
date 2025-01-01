import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    type: 'document',
    title: "Product",
    fields: [
        defineField({
            name: "productName",
            title: "Product Name",
            type: "string"

        }),
        defineField({
            name: "productPrice",
            type: "number",
            title: "Price"
        }),
        defineField({
            name: "productImage",
            type: "image",
            title: "Image"
        })
    ]
})


export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: ' Post Title',
            type: 'string',
        })
    ]
});