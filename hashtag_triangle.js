/*
 * Write a loop that makes seven calls to console.log to output a triangle using hashtags
 */

hashtag = '#';

for (let counter = 0; hashtag.length <= 7; counter++) {
    console.log(hashtag);
    hashtag  += "#";
}