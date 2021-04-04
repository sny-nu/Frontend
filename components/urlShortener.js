import { Component } from "react";
import { toast } from "react-toastify";
import { createUrl } from '../services/url';
import { validateUrl } from '../utils/url';
import UrlHolderLayout from "./urlHolder/urlHolderLayout";
import UrlInput from "./urlHolder/urlInput";
import UrlButton from "./urlHolder/urlButton";
import Loader from "./utils/loader";
import SafeRedirect from "./safeRedirect";

export default class UrlShortener extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            safeRedirect: false,
            copied: false,
            loading: false,
            shortUrl: false,
            invalidUrl: "The URL you are trying to short is not a valid URL.",
            snyUrl: "This URL is already a sny.nu URL"
        }
    }

    handleUrlChange = (e) => {
        this.setState({ 
            url: e.target.value,
            shortUrl: false
        });
    }

    handleSafeRedirectChange = (e) => {
        this.setState({
            safeRedirect: e.target.checked
        })
    }

    createUrl = async () => {
        const url = this.state.url;
        
        if (validateUrl(url) == null) {
            this.state.error = true;
            this.showError(this.state.invalidUrl);
            return;
        }

        if (url.includes("sny.nu")) {
            this.state.error = true;
            this.showError(this.state.snyUrl);
            return;
        }

        this.setState({ loading: true });

        const urlObject = { 
            originalUrl: url,
            safeRedirect: this.state.safeRedirect ? 1 : 0
        }

        const shortUrl = await createUrl(urlObject);

        this.setState({ 
            url: shortUrl, 
            shortUrl: true, 
            loading: false 
        });
    }

    showError = (errorMessage) => {
        toast.error(errorMessage, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    copyUrl = () => {
        navigator.clipboard.writeText(this.state.url);
        document.execCommand("copy");
        this.setState({ copied: true });

        setTimeout(() => {
            this.setState({ copied: false });
        }, 2000)
    }

    render() {
        const { url, shortUrl, copied, loading } = this.state;

        return (
            <div>
                <UrlHolderLayout>
                    <UrlInput 
                        url={url}
                        onChange={this.handleUrlChange}
                    />

                    { !shortUrl ? (
                        <UrlButton onClick={this.createUrl} color="green">
                            { loading ? <Loader /> : "Shorten" }
                        </UrlButton>
                    ) : (
                        <UrlButton onClick={this.copyUrl} color="green">
                            { copied ? "Copied" : "Copy" }
                        </UrlButton>
                    )}
                </UrlHolderLayout>
                <SafeRedirect onChange={this.handleSafeRedirectChange} />
            </div>
        )
    }
}