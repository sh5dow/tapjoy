Install Apps according to READMEs in `be` and `ui` folder.

Solution includes BE and UI with websocket connection showing "live results". 

* Pros: with small files, works with well, live updated data, progress counter, etc.
* Cons: with huge files, it tends to slow down due to enormous number of requests and data sent over network

Solution architecture to update current performance:
* UI sends request with binary data of file towards server
* BE processes data in chunks, asynchronously, tells UI via websocket that the result is ready to be downloaded
* file storage needed for downloading results
