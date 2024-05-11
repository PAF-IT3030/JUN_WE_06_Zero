package com.Lifted.Lifted.Fitness.Application.controller;


import com.Lifted.Lifted.Fitness.Application.entity.DoubleIdObjectEntity;
import com.Lifted.Lifted.Fitness.Application.entity.IdObjectEntity;
import com.Lifted.Lifted.Fitness.Application.entity.MealPlanPostEntity;
import com.Lifted.Lifted.Fitness.Application.service.MealPlanPostService;
import com.Lifted.Lifted.Fitness.Application.service.ResponseObjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class MealPlanPostController {
    @Autowired
    private MealPlanPostService postService;

    @PostMapping("/insertMealPost")
    public ResponseEntity<ResponseObjectService> insertPost(@RequestBody MealPlanPostEntity inputPost) {
        return new ResponseEntity<ResponseObjectService>(postService.insertPost(inputPost), HttpStatus.OK);
    }

    @PostMapping("/myposts")
    public ResponseEntity<ResponseObjectService> findPostByUserId(@RequestBody IdObjectEntity inputUserId) {
        return new ResponseEntity<ResponseObjectService>(postService.findPostByUserId(inputUserId), HttpStatus.OK);
    }

//    @GetMapping("/myposts/{id}")
////    public ResponseEntity<ResponseObjectService> findPostByPostId(@PathVariable IdObjectEntity inputPostId) {
////        return new ResponseEntity<ResponseObjectService>(postService.findPostByUserId(inputPostId), HttpStatus.OK);
////    }

    @GetMapping("/myposts/{userid}/{id}")
    public ResponseEntity<ResponseObjectService> findPostByPostId(@PathVariable String userid, @PathVariable String id) {
        return new ResponseEntity<ResponseObjectService>(postService.findPostByPostId(new IdObjectEntity(id)), HttpStatus.OK);    }



    @PostMapping("/followingposts")
    public ResponseEntity<ResponseObjectService> findPostByFollowing(@RequestBody IdObjectEntity inputUserId) {
        return new ResponseEntity<ResponseObjectService>(postService.findPostByFollowing(inputUserId), HttpStatus.OK);
    }

    // currently not in use, post is update via comment controller
    // @PutMapping("/updatebycomment")
    // public ResponseEntity<ResponseObjectService> updateByComment(@RequestBody PostEntity inputPost) {
    //     return new ResponseEntity<ResponseObjectService>(postService.updatePostByComment(inputPost), HttpStatus.OK);
    // }

    @PostMapping("/lovepost")
    public ResponseEntity<ResponseObjectService> lovePost(@RequestBody DoubleIdObjectEntity doubleId) {
        return new ResponseEntity<ResponseObjectService>(postService.updatePostByLove(doubleId), HttpStatus.OK);
    }

    @PostMapping("/sharepost")
    public ResponseEntity<ResponseObjectService> sharePost(@RequestBody DoubleIdObjectEntity doubleId) {
        return new ResponseEntity<ResponseObjectService>(postService.updatePostByShare(doubleId), HttpStatus.OK);
    }

    @GetMapping("/getAllMealPosts")
        public ResponseEntity<ResponseObjectService> getAllPosts() {
            return new ResponseEntity<ResponseObjectService>(postService.getAllPosts(), HttpStatus.OK);
    }

    @GetMapping("/getMealPostById/{id}")
    public ResponseEntity<ResponseObjectService> getPostById(@PathVariable String id) {
        return new ResponseEntity<ResponseObjectService>(postService.getPostById(new IdObjectEntity(id)), HttpStatus.OK);
    }
    @DeleteMapping("/deleteMealPost/{id}")
    public ResponseEntity<ResponseObjectService> deletePostById(@PathVariable String id) {
        return new ResponseEntity<ResponseObjectService>(postService.deletePostById(new IdObjectEntity(id)), HttpStatus.OK);
    }


}
