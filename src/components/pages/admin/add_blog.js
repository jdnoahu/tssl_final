import React, { useEffect, useState } from 'react';

import Navigation from '../../navigation';
import { LoremIpsum } from 'react-lorem-ipsum';
import Footer from "../../footer";

import BlogHeroImg from "../../photos/blog_hero.jpg";
import BlogPreviewImage from "../../photos/blog_preview.jpg";
import axios from 'axios';
import DropzoneComponent from 'react-dropzone-component';

import "../../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../../node_modules/dropzone/dist/min/dropzone.min.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Table, Col, Card, Badge, Button } from 'reactstrap';
import { Container, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

import FontAwesome from 'react-fontawesome'

// import faStyles from 'font-awesome/css/font-awesome.css'




// import Table from 'react-bootstrap/Table'

// import { Table } from 'reactstrap';



export default function AddBlog() {
    const [blogList, setBlogList] = useState([]);
    const [blogModal, setBlogModal] = useState(false);

    const [id, setId] = useState('');

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Employment');
    const [featuredImage, setFeaturedImage] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        getBlogs();
        // getRoles();
        window.scrollTo(0, 0)
    }, [])

 

    const handleTitle = (e) => {
        setTitle(e.currentTarget.value);
    };
    const handleCategory = (e) => {
        setCategory(e.currentTarget.value);
    };
    const handleFeaturedImage = (e) => {
        setFeaturedImage(e.currentTarget.value);
    };
    const handleContent = (e) => {
        setContent(e.currentTarget.value);
    };
    const handleTags = (e) => {
        setTags(e.currentTarget.value);
    };

    const closeModal = async (e) => {
        setId('')
        setTitle('')
        setCategory('Employment')
        setFeaturedImage('')
        setContent('')
        setTags('')
        setBlogModal(false);
    }


    const createModal = async (e) => {
        setBlogModal(true);
    }
    const createBlog = async (e) => {
        insertOrUpdate();
    }

    function getBlogs() {
        axios.get("http://127.0.0.1:5000/blogs",

            { withCredentials: false }
        ).then(response => {
            console.log("response", response);
            var arr = response.data;
            console.log("response", arr);
            // arr.forEach(element => {
            //     arr.push(element)
            // });

            setBlogList(arr);

        })
            .catch(error => {
                console.log(error)
            });

    }



    async function getEditRecord(id, title, category, featuredImage, content, tags) {
        // if (roleId == "0") {
        //   alert("Admin Role is not editable!")
        //   return;
        // }
        console.log(featuredImage)
        setId(id);
        setTitle(title);
        setCategory(category);
        setFeaturedImage(featuredImage);
        setContent(content);
        setTags(tags);
        setBlogModal(true);
    }

    async function deleteRecord(id) {
        console.log(id)
        // return;
        await axios.delete("http://127.0.0.1:5000/blog/"+id)
            .then(function (response) {
                // console.log("Running")
                console.log(response);
                if (response.status == 200) {
                    getBlogs();
                }
                console.log("STATUS:  " + response.status);

            })
            .catch(function (error) {

                console.log(error);
            });
    }
    async function insertOrUpdate() {
        console.log(id)
        // return;
        if (id != "") {
            
            axios.put("http://127.0.0.1:5000/blog/"+id, {
                
                title: title,
                category: category,
                // creation_date: createdDate,
                featured_image: featuredImage,
                content: content,
                tags: tags

            })
                .then(function (response) {
                    // console.log("Running")
                    setId('')
                    setTitle('')
                    setCategory('Employment')
                    setFeaturedImage('')
                    setContent('')
                    setTags('')
                    setBlogModal(false);
                    getBlogs();
                    console.log(response);
                    if (response.status == 200) {

                        console.log("STATUS Now:  " + response.status);
                    }
                    console.log("STATUS:  " + response.status);
                })
                .catch(function (error) {

                    console.log(error);
                });
        }
        else {
            console.log("Save")
            console.log("Save",category)
            // return;
            var today = new Date();
            var createdDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            axios.post("http://127.0.0.1:5000/blog", {
                title: title,
                category: category,
                creation_date: createdDate,
                featured_image: featuredImage,
                content: content,
                tags: tags

            })
                .then(function (response) {
                    // console.log("Running")
                    setId('')
                    setTitle('')
                    setCategory('Employment')
                    setFeaturedImage('')
                    setContent('')
                    setTags('')

                    getBlogs();
                    setBlogModal(false);
                    console.log(response);
                    if (response.status == 200) {

                        console.log("STATUS Now:  " + response.status);
                    }
                    console.log("STATUS:  " + response.status);
                })
                .catch(function (error) {
                    
                    console.log(error);
                });

        }

    }

    return (

        <div className="blog_wrapper">
            <Navigation />
            <div className="hero_image">
                <img src={BlogHeroImg} />
            </div>
            <div className="page_title">Blogs</div>
            <br />

            <Row>
                <Col xl="12">
                    <Card className="card-box mb-5">
                        <div className="font-size-lg px-3 py-4 font-weight-bold">
                            Blogs List
                            <Button onClick={() => {
                                createModal();
                            }} style={{ float: 'right' }} size="sm" >
                                <span className="btn-wrapper--label">Add Blog</span>
                            </Button>
                        </div>
                        {/* <div className="card-header--actions">
                            
                        </div> */}
                        <div className="table-responsive-md">
                            <Table borderless className="text-nowrap mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase bg-secondary">Category</th>
                                        <th className="text-uppercase bg-secondary">Title</th>
                                        <th className="text-uppercase bg-secondary">Content</th>
                                        <th className="text-uppercase bg-secondary text-center">
                                            Actions
                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogList.map((item, index) => (
                                        <tr>
                                            <td>{item.category}</td>
                                            <td>{item.title}</td>
                                            <td>{item.content}</td>

                                            <td className="text-center">
                                                <Button onClick={(event) => getEditRecord(item.id, item.title, item.category, item.featured_image, item.content, item.tags)} size="sm" >
                                                    <span className="btn-wrapper--label">Edit</span>
                                                </Button>
                                            &nbsp;
                                            <Button onClick={(event) => deleteRecord(item.id)} style={{ backgroundColor: "#BB2424" }} size="sm" >
                                                    <span className="btn-wrapper--label">Delete</span>
                                                </Button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Modal zIndex={2000} centered isOpen={blogModal}>
                <ModalHeader>Create Blog {' '}
                    <Button color="link" className="btn-link-dark" onClick={() => {
                        closeModal();
                    }}>
                        Close
            </Button>
                </ModalHeader>

                <ModalBody>
                    <FormGroup style={{ marginTop: 15 }}>
                        <Input
                            placeholder="Title"
                            id="title" name="title" value={title} onChange={handleTitle}
                        />
                    </FormGroup>
                    <FormGroup style={{ marginTop: 0 }}>
                        <Input type="select" id="category" name="category" value={category} onChange={handleCategory} >
                            <option value="Employment">Employment</option>
                            <option value="Finance">Finance</option>
                            <option value="Health">Health</option>
                            <option value="Relationships">Relationships</option>
                            <option value="Spirituality">Spirituality</option>
                        </Input>

                    </FormGroup>
                    <FormGroup style={{ marginTop: 0 }}>
                        <Input
                            placeholder="Featured Image"
                            id="featuredImage" name="featuredImage" value={featuredImage} onChange={handleFeaturedImage}
                        />
                    </FormGroup>
                    <FormGroup style={{ marginTop: 0 }}>
                        <Input
                            placeholder="Content"
                            id="content" name="content" value={content} onChange={handleContent}
                        />
                    </FormGroup>
                    <FormGroup style={{ marginTop: 0 }}>
                        <Input
                            placeholder="Tags"
                            id="tags" name="tags" value={tags} onChange={handleTags}
                        />
                    </FormGroup>

                </ModalBody>
                <ModalFooter>
                    <Button color="link" className="btn-link-dark" onClick={() => {
                        closeModal();
                    }}>
                        Close
            </Button>{' '}
                    <Button color="primary" className="ml-auto" onClick={() => {
                        createBlog();
                    }}>
                        Create Blog
            </Button>
                </ModalFooter>
            </Modal>


            <div><Footer /></div>

        </div>
    )
}

// const styles = {
//     table: {
//         borderCollapse: "collapse",
//         width: "100%"
//     },
//     td: {
//         border: '1px solid #dddddd',
//         textAlign: 'left',
//         padding: 8,
//     },
//     th: {
//         border: '1px solid #dddddd',
//         textAlign: 'left',
//         padding: 8,
//     },
// };
