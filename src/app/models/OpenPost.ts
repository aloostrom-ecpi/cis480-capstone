export interface OpenPost {
   id: String
   postDate: Date,
   author: String,
   body: String,
   isParent: Boolean,
   parentPost: String,
}