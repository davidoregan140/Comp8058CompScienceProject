import React, { Component } from "react";
import axios from "axios";
//import { uploadWidget } from "../utils/WidgetHelper";
import { CloudinaryContext, Image } from "cloudinary-react";
import { FacebookShareButton } from "react-share";

class CloudGallery extends Component {
  state = {
    gallery: []
  };

  getImages() {
    axios
      .get("https://res.cloudinary.com/wedmgmgt/image/list/xmas.json")
      .then(res => {
        this.setState({ gallery: res.data.resources });
      });
  }
  componentDidMount() {
    this.getImages();
  }

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "wedmgmgt",
        api_secret: "ewVP1GTYdDRzWY444VrO1-VnVHo",
        upload_preset: "v4nver2a",
        tags: ["xmas"],
        client_allowed_formats: ["jpeg", "png", "jpg"]
      },
      function(error, result) {
        _this.setState({ gallery: _this.state.gallery.concat(result) });
      }
    );
  }

  render() {
    const { gallery } = this.state;
    return (
      <div>
        <div className="upload">
          <a
            onClick={this.uploadWidget.bind(this)}
            className="waves-effect waves-light btn"
          >
            Add Image<i className="material-icons right">add_circle</i>
          </a>
        </div>

        <div className="container">
          <div className="row">
            <h3 className="col-md-12">Your memories are below...</h3>
            <CloudinaryContext cloudName="wedmgmgt">
              {gallery.map((data, index) => (
                <div
                  className="col-md-6 col-sm-6 col-xs-12 col-lg-4"
                  key={index}
                >
                  <div className="panel panel-default">
                    <div className="panel-body">
                      <div className="embed-responsive embed-responsive-16by9">
                        <Image
                          className="img-responsive"
                          publicId={data.public_id}
                        />
                      </div>
                    </div>
                    <div className="panel-footer">
                      <a className="label label-info">Delete Image</a>
                      <FacebookShareButton
                        className="label label-info"
                        url={`https://res.cloudinary.com/wedmgmgt/image/upload/${
                          data.public_id
                        }.jpg`}
                      >
                        Facebook
                      </FacebookShareButton>
                    </div>
                  </div>
                </div>
              ))}
            </CloudinaryContext>
          </div>
        </div>
      </div>
    );
  }
}

export default CloudGallery;
