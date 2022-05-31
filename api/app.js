// {
//     "type": "service_account",
//     "project_id": "messaging-app-bd74f",
//     "private_key_id": "2c742fafef782d2d586207393450dbb807738c4c",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6ReyQZvdwmUy6\nM37ph5r6wqm4tnIg88DgGZBCk9ZYgqKuEoIsyVc/tFdgIjU+pDnzgVCEphu/pUcH\nJhb8ME9c5iIvGJ3Bkjl55xYxCX/CD3eCTEg7c7q7sfIP6PnsO3/EiE/FChOTBZLb\nhOkrvSRC3EfQlOR4rQuh1YKtFvKA5H0xo8OXEkp0f4pYYtO9uyUasY8vLaCbc6fz\ndugt9TAeQOKA566/+0Zy6xgAOU3POSBhdX0u1TOCpcIBcbJHiDPgQr6P1cXpEZF+\nqlAs660oDFZkIKa7SQt2FoTbtg6mmr71GOFCeiMcZTbReYcDhQaLUs/o3QBQJqqq\nmw8tVo+jAgMBAAECggEAMMfAAD7evL+AnuB+c1SeSt3wiV1J/QQodedr5muFve8U\nACb7rRPbA+VL3nKG5A0o2fJ67gn8CU+UjrQ0X72dAvSHbjLxmTAcWiagop3ctarM\nPrSQU/VmKOIcRHtb+7fHKWYTEcQmRSG4CEHBuEETfmjma6KaRFn4ylw6GO8B+auo\n8DhTM461RdEDB+PpzKkpozkW5EDfj8f7jEQgRsoCaeGr9t0r2wxwGcVppVta1yL2\nrczaeosOXIjKsRI5Ow3DL/sZ+YLkLyoKBX/HwHzTBOE4izbwZBOgVs2RwbSTs1+x\nlxjeU6kMYZW7m/WGU/pgzVT9fzjztrNs/svg6FPZ9QKBgQD7rzGDOEFbwISgjjRF\nXaYi932vSvgWELMRob7KnN+UTzqtVL206CxH6w+XMiHZ1Y18t2msieOlETVg2Rui\nJpOwclUMFf1Mz1JgGwZUURCr37GTBoJ29gXn9XXrXdzi4dLPlglw4r6vyM/s1XVb\n3bhU9wRmHA7UyxsSjYb6WO4N3QKBgQC9d5kneC68WlgcuQWEzEj42pZEkip2D0hO\nHvL9QICqu+hmX4p7EvRdW4qEQvfCsiR+UzA6lqVV+fFTuj+FIpLaaOt3xXr7itLT\nz8V3kArkvMPINuVGnVLiT+PPr4eDbqJB1NjW1UvkLF/GKq/svtohB8TA+3bQYRKb\n/vblCt77fwKBgEkkovkFkkj97A1VBm/aRXwH/OjCmtKey8ul+/KaIIfTdrQE2pUG\nnEfSUleYZCoQW+wQyY8xC41fMOoSbmtzVpyCvaCji1eVMNVpRS+f1357pfmafLPh\nz9mXhkt+ncD56/AUJG5AFzay32pupoqqJvXaS9b49H53AEkmBEIhMh2pAoGBAKfc\n3oRppn6aTJamFo2hsMVKZPg7yALxZ05PfVmDXHvoH+8Tls2T7Y0JHaAw9PI6grqp\nWYGPFs0ltPpJeR2rlBCOBJEJFfzm8gNXgcx8gipGU+9/M4Nsv5Ji1aOcEKQR0RAi\nVDuCnsp5xiD8kQFf1kKNb3TLVmkomCQ9sOEc0JJhAoGAOXu7cT/jF5A3ka/PvToo\nlAHwnWrooKIdmH7CQSUKqMgfGTxP1n/4xcOpdngo3VxCJfBfODVWyDhs3KptIKU5\nC6gBM6sKWyIz5WVaDDaQdrrzSn8YkGa3ZE3+R/sMcvyo/jdlGNdA0anWyIPff36b\naT5J2r4y5RKmvg9wvBnF+Fo=\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-16ylb@messaging-app-bd74f.iam.gserviceaccount.com",
//     "client_id": "118150826438122876269",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-16ylb%40messaging-app-bd74f.iam.gserviceaccount.com"
// }

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var chatRouter = require('./routes/chat')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/chat', chatRouter)

app.use(express.json());
app.use(cors({ origin: true }));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
