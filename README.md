# warden management system


![Screenshot from 2023-11-28 17-50-34](https://github.com/wasifkareem/management_sys/assets/119349657/6666a8ba-2d17-448f-8776-7f5aaa45aadc)

backend nodejs APIs which allows wardes to login, book sessions and share sessions with other wardens

1. A warden A enters his university ID number and pswd and gets a unique token which is used in authentication in all further APIs for this user - sent as bearer token in the headers.
2. A sees a list of free sessions available with other warden supposedly warden B. Each warden B slot is 1 hr long and a warden is only available on Thur, Fri 10 AM every week.
3. A picks one of the above slots and books.
4. Warden B logins in with his university ID and pswd (similar to 1 above). Yes warden B too gets his own token.
5. Warden B sees a list of all pending sessions - warden name, and slot details. Currently only A.
6. Warden C logs in, gets a list of free slots and books a slot.
7. Warden B logs in back and sees a list of his pending sessions - both A and C.
8. Warden logs in back after slot time booked by A and he can see only C in the list
