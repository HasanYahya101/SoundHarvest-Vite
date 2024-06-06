import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export function Playground() {

    const [videoUrl, setVideoUrl] = useState('');
    const [downloadLink, setDownloadLink] = useState('');
    const [error, setError] = useState('');
    const [format, setFormat] = useState('');
    const [quality, setQuality] = useState('');
    const [buttonClicked, setButtonClicked] = useState(false);

    const { toast } = useToast();

    const handleDownload = async () => {
        if (videoUrl === '' || videoUrl === null) {
            toast({
                title: "Error",
                description: "Please enter a valid YouTube link in the field.",
                variant: "destructive"
            })
            return;
        }
        else if (format === '' || format === null || format !== 'audio') {
            toast({
                title: "Error",
                description: "Please select a file format from the list.",
                variant: "destructive"
            })
            return;
        }
        else if (quality === '' || quality === null) {
            toast({
                title: "Error",
                description: "Please select an audio quality from the list.",
                variant: "destructive"
            })
            return;
        }

    };

    function windowLoaded() {
        toast({
            title: "Warning",
            description: "There is a hard limit of 1000 on the number of downloads per month. If the limit is exceeded you might be stuck in a loop.",
        })
    }

    useEffect(() => {
        windowLoaded();
    }, []);



    return (
        (
            <Card
                className="w-full max-w-md bg-white dark:bg-gray-950 rounded-xl shadow-lg mx-auto p-6 space-y-6 mt-10">
                <CardHeader className="px-6 pt-6">
                    <CardTitle>Download YouTube Audio</CardTitle>
                    <CardDescription>Enter a YouTube link and choose your preferred quality.</CardDescription>
                </CardHeader>
                <Toaster />
                <CardContent className="px-6 py-4 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="youtube-link">YouTube Link</Label>
                        <Input onChange={(e) => setVideoUrl(e.target.value)}
                            id="youtube-link"
                            placeholder="https://www.youtube.com/watch?v=example" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="format">Format</Label>
                            <Select id="format" onChange={(e) => setFormat(e.target.value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select format" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="audio">Audio</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="quality">Quality</Label>
                            <Select id="quality" onChange={(e) => setQuality(e.target.value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select quality" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="320">320</SelectItem>
                                    <SelectItem value="256">256</SelectItem>
                                    <SelectItem value="192">192</SelectItem>
                                    <SelectItem value="128">128</SelectItem>
                                    <SelectItem value="64">64</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 flex justify-end">
                    {buttonClicked === false ? (
                        <Button onClick={() => {
                            handleDownload();
                        }}
                        >Download</Button>)
                        : (
                            <Button disabled>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait...
                            </Button>
                        )}

                </CardFooter>
            </Card>
        )
    );
}
