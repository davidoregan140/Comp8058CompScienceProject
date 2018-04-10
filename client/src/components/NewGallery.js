import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './NewGallery.css';



const CLOUDINARY_UPLOAD_PRESET = 'v4nver2a';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/wedmgmgt/image/upload';

export default class NewGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  // onDrop: acceptedFiles => {
  //   acceptedFiles.forEach(file => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const fileAsBinaryString = reader.result;
  //
  //     };
  //     reader.onabort = () => console.log('file reading aborted');
  //     reader.onerror = () => console.log('file reading failed');
  //
  //     reader.readAsBinaryString(file);
  //   });
  // }


  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <form>
        <div className="container">
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} alt=""/>
          </div>}
        </div>
      </form>
    )
  }
}
