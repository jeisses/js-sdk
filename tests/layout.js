const BufferLayout = require('buffer-layout');
const {PublicKey} = require('@solana/web3.js');
const anchor = require('@project-serum/anchor');
const {BN} = anchor;

const StreamInstructionLayout = BufferLayout.struct([
    BufferLayout.blob(8, "start_time"),
    BufferLayout.blob(8, "end_time"),
    BufferLayout.blob(8, "deposited_amount"),
    BufferLayout.blob(8, "total_amount"),
    BufferLayout.blob(8, "period"),
    BufferLayout.blob(8, "cliff"),
    BufferLayout.blob(8, "cliff_amount"),
]);

function decode(buf) {
    let raw = StreamInstructionLayout.decode(buf);
    return {
        "start_time": new BN(raw.start_time),
        "end_time": new BN(raw.end_time),
        "deposited_amount": new BN(raw.deposited_amount),
        "total_amount": new BN(raw.total_amount),
        "period": new BN(raw.period),
        "cliff": new BN(raw.cliff),
        "cliff_amount": new BN(raw.cliff_amount),
    };
}

const TokenStreamDataLayout = BufferLayout.struct([
    BufferLayout.blob(8, "magic"),
    BufferLayout.blob(8, "start_time"),
    BufferLayout.blob(8, "end_time"),
    BufferLayout.blob(8, "deposited_amount"),
    BufferLayout.blob(8, "total_amount"),
    BufferLayout.blob(8, "period"),
    BufferLayout.blob(8, "cliff"),
    BufferLayout.blob(8, "cliff_amount"),
    BufferLayout.blob(8, "created_at"),
    BufferLayout.blob(8, "withdrawn"),
    BufferLayout.blob(8, "cancel_time"),
    BufferLayout.blob(32, "sender"),
    BufferLayout.blob(32, "sender_tokens"),
    BufferLayout.blob(32, "recipient"),
    BufferLayout.blob(32, "recipient_tokens"),
    BufferLayout.blob(32, "mint"),
    BufferLayout.blob(32, "escrow_tokens"),
]);

function decode(buf) {
    let raw = TokenStreamDataLayout.decode(buf);
    return {
        "magic": new BN(raw.magic),
        "start_time": new BN(raw.start_time),
        "end_time": new BN(raw.end_time),
        "deposited_amount": new BN(raw.deposited_amount),
        "total_amount": new BN(raw.total_amount),
        "period": new BN(raw.period),
        "cliff": new BN(raw.cliff),
        "cliff_amount": new BN(raw.cliff_amount),
        "created_at": new BN(raw.created_at),
        "withdrawn": new BN(raw.withdrawn),
        "cancel_time": new BN(raw.cancel_time),
        "sender": new PublicKey(raw.sender),
        "sender_tokens": new PublicKey(raw.sender_tokens),
        "recipient": new PublicKey(raw.recipient),
        "recipient_tokens": new PublicKey(raw.recipient_tokens),
        "mint": new PublicKey(raw.mint),
        "escrow_tokens": new PublicKey(raw.escrow_tokens),
    };
}

exports.decode = decode;