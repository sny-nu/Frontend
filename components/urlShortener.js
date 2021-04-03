import { Component } from "react";
import { toast } from "react-toastify";
import { createUrl } from '../services/url';
import { validateUrl } from '../utils/url';

export default class UrlShortener extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        url: "",
        safeRedirect: false,
        copied: false,
        loading: false,
        shortUrl: false,
        invalidUrl: "The URL you are trying to short is not a valid URL.",
        snyUrl: "This URL is already a sny.nu URL"
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

        this.setState({ url: shortUrl, shortUrl: true });
        this.state.url = shortUrl;
        this.state.shortUrl = true;

        this.setState({ loading: false });
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
        const url = this.state.url;
        navigator.clipboard.writeText(url);
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
                <div className="relative flex md:flex-row flex-col items-center max-w-2xl mx-auto mt-12 overflow-hidden text-center md:rounded-full md:h-16">
                    <input 
                        type="text"
                        name="url"
                        placeholder="Place your url here"
                        className="w-full h-12 px-4 md:px-6 py-2 font-medium text-gray-900 focus:outline-none rounded-full mb-2 md:mb-0 md:rounded-none md:h-16 border-none"
                        value={url}
                        onChange={this.handleUrlChange}
                    />
                    { !shortUrl ? (
                        <button className="bg-green-500 h-12 md:w-48 relative top-0 right-0 text-gray-900 text-base font-bold 
                            leading-6 hover:bg-green-400 transition duration-500 ease-in-out focus:outline-none
                            rounded-full md:rounded-none w-full md:h-16"
                            onClick={this.createUrl}
                        >
                            { loading ? 
                                (<div v-if="loading" class='flex flex-row w-full items-center text-center justify-self-center relative justify-center'>
                                    <span class='loading h-full mr-2'></span>
                                    <p class="text-sm">Loading</p>
                                </div>) 
                                : "Shorten"
                            }
                        </button>
                    ) : (
                        <button className="bg-green-500 h-12 md:w-48 relative top-0 right-0 text-gray-900 text-base font-bold 
                            leading-6 hover:bg-green-400 transition duration-500 ease-in-out focus:outline-none
                            rounded-full md:rounded-none w-full md:h-16"
                            onClick={this.copyUrl}
                        >
                            { copied ? "Copied" : "Copy" }
                        </button>
                    )}
                </div>
                <label className="inline-flex items-center mt-2">
                    <input 
                        type="checkbox" 
                        className="form-checkbox-simple text-green-500 h-4 w-4 rounded" 
                        onChange={this.handleSafeRedirectChange}
                    />
                    <span className="ml-2 text-gray-400">Do you want your url to have a saferedirect?</span>
                </label>
            </div>
        )
    }
}